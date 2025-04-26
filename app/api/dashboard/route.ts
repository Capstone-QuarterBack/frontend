import { NextResponse } from "next/server"
import type { DashboardData } from "@/types/dashboard"

// 예시 API 라우트 - 실제 데이터베이스나 외부 API에 연결하여 사용
export async function GET() {
  // 실제 구현에서는 데이터베이스나 외부 API에서 데이터를 가져옴
  const mockData: DashboardData = {
    chargingStatus: {
      percentage: 35,
      isAvailable: true,
      totalPower: 135,
    },
    vehicleInfo: {
      startTime: "03/19 15:01:20분",
      estimatedEndTime: "03/19 20:01:30분",
      vehicleId: "EV-2023-1234",
      vehicleType: "테슬라 모델 3",
    },
    alertInfo: {
      hasIssue: false,
      contactInfo: "콜센터: 1588-0000",
    },
  }

  return NextResponse.json(mockData)
}
