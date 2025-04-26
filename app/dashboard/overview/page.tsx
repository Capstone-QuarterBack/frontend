import UsageChart from "@/components/dashboard/overview/usage-chart"
import UsageTable from "@/components/dashboard/overview/usage-table"
import RealTimeStatus from "@/components/dashboard/overview/real-time-status"
import StationInfo from "@/components/dashboard/overview/station-info"
import StatsSidebar from "@/components/dashboard/overview/stats-sidebar"

export default function DashboardOverviewPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* 메인 콘텐츠 영역 (9/12) */}
      <div className="col-span-12 lg:col-span-9 space-y-4">
        {/* 차트 영역 */}
        <UsageChart />

        {/* 테이블 및 실시간 상태 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UsageTable />
          <RealTimeStatus />
        </div>

        {/* 충전소 정보 영역 */}
        <StationInfo />
      </div>

      {/* 사이드바 영역 (3/12) */}
      <div className="col-span-12 lg:col-span-3">
        <StatsSidebar />
      </div>
    </div>
  )
}
