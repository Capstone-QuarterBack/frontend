"use client"

import { useState, useEffect } from "react"
import DashboardLayout from "./dashboard-layout"
import type { DashboardData } from "@/types/dashboard"
import { fetchDashboardData } from "@/lib/api"

export default function ClientDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 데이터 로딩
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        const dashboardData = await fetchDashboardData()
        setData(dashboardData)
        setError(null)
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  // 로딩 중 표시
  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  // 에러 발생 시 에러 메시지 표시
  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 text-center">
        <div className="bg-red-900 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">오류 발생</h2>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-white text-red-900 px-4 py-2 rounded-md font-medium"
          >
            새로고침
          </button>
        </div>
      </div>
    )
  }

  // 데이터가 없는 경우 처리
  if (!data) {
    return null
  }

  return <DashboardLayout data={data} />
}
