// 대시보드 데이터 타입 정의
export interface DashboardData {
  id?: number
  chargingStatus: {
    percentage: number
    isAvailable: boolean
    totalPower: number // MWh
  }
  vehicleInfo: {
    startTime: string
    estimatedEndTime: string
    vehicleId?: string
    vehicleType?: string
  }
  alertInfo: {
    hasIssue: boolean
    issueType?: string
    contactInfo?: string
    buttonColor?: string // 버튼 색상 추가
  }
}
