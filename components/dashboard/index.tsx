import DashboardLayout from "./dashboard-layout"
import { mockDashboardData } from "@/mocks/dashboard-data"

export default function EVChargingDashboard() {
  // 목업 데이터 사용
  return <DashboardLayout data={mockDashboardData} stationId="1" />
}
