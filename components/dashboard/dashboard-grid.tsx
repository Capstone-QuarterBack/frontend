"use client"

import { useState } from "react"
import DashboardLayout from "./dashboard-layout"
import type { DashboardData } from "@/types/dashboard"
import { mockDashboardData } from "@/mocks/dashboard-data"

export default function DashboardGrid() {
  // 4개의 대시보드 데이터 (실제로는 API에서 각각 다른 데이터를 가져올 수 있음)
  const [dashboards, setDashboards] = useState<DashboardData[]>([
    { ...mockDashboardData, id: 1, alertInfo: { ...mockDashboardData.alertInfo, buttonColor: "red" } },
    { ...mockDashboardData, id: 2, alertInfo: { ...mockDashboardData.alertInfo, buttonColor: "green" } },
    { ...mockDashboardData, id: 3, alertInfo: { ...mockDashboardData.alertInfo, buttonColor: "red" } },
    { ...mockDashboardData, id: 4, alertInfo: { ...mockDashboardData.alertInfo, buttonColor: "red" } },
  ])

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dashboards.map((dashboard) => (
          <div key={dashboard.id} className="bg-gray-800 rounded-lg p-2 shadow-lg">
            <DashboardLayout data={dashboard} stationId={dashboard.id?.toString()} />
          </div>
        ))}
      </div>
    </div>
  )
}
