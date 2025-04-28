"use client"

import { useState, useEffect } from "react"
import type { ChargingStationStatus } from "@/types/charging-status"
import { RefreshCw } from "lucide-react"

interface ChargingStatusDisplayProps {
  stationId: string
  refreshInterval?: number // 새로고침 간격 (밀리초)
  useMockData?: boolean // 모의 데이터 사용 여부
}

// 모의 데이터 생성 함수
function generateMockData(stationId: string, prevPercentage?: number): ChargingStationStatus {
  // 이전 퍼센트에서 -5%~+5% 범위 내에서 변경 (최소 0%, 최대 100%)
  let percentage =
    prevPercentage !== undefined
      ? Math.max(0, Math.min(100, prevPercentage + (Math.random() * 10 - 5)))
      : Math.floor(Math.random() * 100)

  // 소수점 없애기
  percentage = Math.floor(percentage)

  // 20% 미만이면 사용 불가로 설정
  const isAvailable = percentage > 20

  return {
    status: isAvailable ? "AVAILABLE" : "UNAVAILABLE",
    percentage,
    isAvailable,
  }
}

export default function ChargingStatusDisplay({
  stationId,
  refreshInterval = 30000, // 기본값 30초
  useMockData = false, // 기본값 false
}: ChargingStatusDisplayProps) {
  const [status, setStatus] = useState<ChargingStationStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 충전소 상태 데이터 가져오기
  const fetchStatus = async () => {
    try {
      setLoading(true)

      if (useMockData) {
        // 모의 데이터 사용
        await new Promise((resolve) => setTimeout(resolve, 500)) // 로딩 시뮬레이션
        const mockData = generateMockData(stationId, status?.percentage)
        setStatus(mockData)
      } else {
        // 실제 API 호출
        const response = await fetch(`/api/charging-stations/${stationId}/status`)
        if (!response.ok) {
          throw new Error(`API 오류: ${response.status}`)
        }
        const data = await response.json()
        setStatus(data.stationStatus)
      }

      setError(null)
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // 컴포넌트 마운트 시 및 주기적으로 데이터 가져오기
  useEffect(() => {
    fetchStatus()

    // 주기적으로 데이터 새로고침
    const intervalId = setInterval(fetchStatus, refreshInterval)

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(intervalId)
  }, [stationId, refreshInterval])

  // 상태에 따른 배경색 설정
  const getStatusColor = () => {
    if (!status) return "bg-gray-700"

    if (status.status === "AVAILABLE") return "bg-green-800"
    if (status.status === "CHARGING") return "bg-blue-800"
    return "bg-red-800"
  }

  return (
    <div className="bg-gray-700 rounded-lg p-4 space-y-2">
      <p className="text-gray-300 text-sm text-center">CHARGING STATION STATUS</p>

      {loading ? (
        <div className="flex justify-center py-2">
          <RefreshCw className="w-5 h-5 text-gray-400 animate-spin" />
        </div>
      ) : error ? (
        <p className="text-red-400 text-sm text-center">{error}</p>
      ) : (
        <>
          <p className={`text-gray-300 text-sm text-center ${status?.isAvailable ? "text-green-400" : "text-red-400"}`}>
            {status?.status || "UNKNOWN"}
          </p>
          <div className="flex justify-center">
            <p className="text-white text-6xl font-bold">{status?.percentage || 0}%</p>
          </div>
        </>
      )}

      {/* 수동 새로고침 버튼 */}
      <div className="flex justify-center mt-2">
        <button
          onClick={fetchStatus}
          className="text-xs text-gray-400 flex items-center hover:text-white"
          disabled={loading}
        >
          <RefreshCw className="w-3 h-3 mr-1" />
          새로고침
        </button>
      </div>
    </div>
  )
}
