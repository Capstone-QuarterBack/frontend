import DashboardGrid from "@/components/dashboard/dashboard-grid"

export default function StationsPage() {
  return (
    <div>
      <div className="mb-4 bg-gray-800 rounded-lg p-4 text-white text-center">
        <h2 className="text-xl">이용 가능한 충전기 수 : 1</h2>
      </div>
      <DashboardGrid />
    </div>
  )
}
