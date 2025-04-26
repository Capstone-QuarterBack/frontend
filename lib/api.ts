import type { DashboardData } from "@/types/dashboard"
import { mockDashboardData } from "@/mocks/dashboard-data"

// API 기본 URL (나중에 실제 URL로 변경)
const API_BASE_URL = "/api" // 또는 "http://localhost:8080/api" 등

// 목업 모드 설정 (나중에 false로 변경)
const USE_MOCK_DATA = true

// 대시보드 데이터 가져오기
export async function fetchDashboardData(): Promise<DashboardData> {
  // 목업 모드인 경우 목업 데이터 반환
  if (USE_MOCK_DATA) {
    // 실제 API 호출을 시뮬레이션하기 위한 지연
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockDashboardData
  }

  // 실제 API 호출
  try {
    const response = await fetch(`${API_BASE_URL}/dashboard`)

    if (!response.ok) {
      throw new Error(`API 오류: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("데이터 가져오기 오류:", error)
    // 오류 발생 시 목업 데이터로 폴백
    return mockDashboardData
  }
}
