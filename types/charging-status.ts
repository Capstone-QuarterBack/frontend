// 충전소 상태 데이터 타입
export interface ChargingStationStatus {
  status: string // 'AVAILABLE', 'CHARGING', 'UNAVAILABLE' 등
  percentage: number // 충전 퍼센트 (0-100)
  isAvailable: boolean // 사용 가능 여부
}

// 충전소 상태 응답 타입
export interface ChargingStatusResponse {
  stationId: string
  stationStatus: ChargingStationStatus
  timestamp: string
}
