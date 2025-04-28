import { NextResponse } from "next/server"
import type { ChargingStatusResponse } from "@/types/charging-status"

// 모의 데이터를 저장할 객체 (실제 구현에서는 데이터베이스 사용)
const mockStationData: Record<string, ChargingStatusResponse> = {}

// 모의 데이터 생성 함수
function generateMockData(stationId: string): ChargingStatusResponse {
  // 이전 데이터가 있으면 약간만 변경, 없으면 새로 생성
  const prevData = mockStationData[stationId]

  // 이전 퍼센트에서 -5%~+5% 범위 내에서 변경 (최소 0%, 최대 100%)
  let percentage = prevData
    ? Math.max(0, Math.min(100, prevData.stationStatus.percentage + (Math.random() * 10 - 5)))
    : Math.floor(Math.random() * 100)

  // 소수점 없애기
  percentage = Math.floor(percentage)

  // 20% 미만이면 사용 불가로 설정
  const isAvailable = percentage > 20

  return {
    stationId,
    stationStatus: {
      status: isAvailable ? "AVAILABLE" : "UNAVAILABLE",
      percentage,
      isAvailable,
    },
    timestamp: new Date().toISOString(),
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  // 전체 params 객체를 await
  const resolvedParams = await params
  const id = resolvedParams.id

  // 모의 데이터 생성
  const data = generateMockData(id)

  // 모의 데이터 저장 (다음 요청에서 참조하기 위함)
  mockStationData[id] = data

  // 실제 API 응답 시뮬레이션을 위한 지연
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(data)
}
