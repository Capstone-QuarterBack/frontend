import type { ChargingStatusResponse } from "@/types/charging-status"

// 충전소 상태 데이터 가져오기
export async function fetchChargingStatus(stationId: string): Promise<ChargingStatusResponse> {
  try {
    // Next.js API 라우트 사용
    const response = await fetch(`/api/charging-stations/${stationId}/status`)

    if (!response.ok) {
      throw new Error(`API 오류: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("충전소 상태 데이터 가져오기 오류:", error)

    // 오류 발생 시 기본 데이터 반환
    return {
      stationId,
      stationStatus: {
        status: "UNAVAILABLE",
        percentage: 0,
        isAvailable: false,
      },
      timestamp: new Date().toISOString(),
    }
  }
}
