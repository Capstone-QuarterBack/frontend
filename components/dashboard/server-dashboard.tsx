import DashboardLayout from "./dashboard-layout"
import { fetchDashboardData } from "@/lib/api"

// 서버 컴포넌트 버전의 대시보드
export default async function ServerDashboard() {
  try {
    // 서버에서 데이터 가져오기
    const data = await fetchDashboardData()

    return <DashboardLayout data={data} />
  } catch (error) {
    // 에러 처리
    console.error("Error loading dashboard data:", error)

    return (
      <div className="w-full max-w-4xl mx-auto p-4 text-center">
        <div className="bg-red-900 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">오류 발생</h2>
          <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
        </div>
      </div>
    )
  }
}
