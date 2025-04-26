import type { DashboardData } from "@/types/dashboard"

// 목업 데이터 - 실제 API 연동 전까지 사용할 정적 데이터
export const mockDashboardData: DashboardData = {
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
    buttonColor: "red", // 기본 버튼 색상
  },
}
