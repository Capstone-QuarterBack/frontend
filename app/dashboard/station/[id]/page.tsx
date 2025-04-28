import StationDetail from "@/components/dashboard/station-detail"

export default function StationDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">충전소 대시보드</h1>
        <StationDetail stationId={params.id} />
      </div>
    </div>
  )
}
