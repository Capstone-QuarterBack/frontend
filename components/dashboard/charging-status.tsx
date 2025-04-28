import type { DashboardData } from "@/types/dashboard"
import ChargingStatusDisplay from "./charging-status-display"
import { Battery } from "lucide-react" // Import Battery Icon

interface ChargingStatusProps {
  data: DashboardData["chargingStatus"]
  stationId?: string
}

export default function ChargingStatus({ data, stationId = "1" }: ChargingStatusProps) {
  // stationId가 제공되면 동적 데이터를 사용하고, 그렇지 않으면 정적 데이터 사용
  if (stationId) {
    return (
      <div className="space-y-4 h-full">
        {/* 동적 충전소 상태 */}
        <ChargingStatusDisplay stationId={stationId} />

        {/* 배터리 상태 (기존 코드 유지) */}
        <div className="bg-gray-900 rounded-lg p-4 space-y-4 flex-1">
          <div className="flex justify-center">
            <Battery className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />
          </div>
          <div className="text-center">
            <p className="text-white text-lg md:text-xl">{data.totalPower} (MWh)</p>
            <p className="text-gray-400 text-xs md:text-sm mt-2">총 충전 모니터링</p>
          </div>
        </div>
      </div>
    )
  }

  // 기존 정적 데이터 표시 (이전 코드 유지)
  return (
    <div className="space-y-4 h-full">
      {/* Charging Station Status */}
      <div className="bg-gray-700 rounded-lg p-4 space-y-2">
        <p className="text-gray-300 text-sm text-center">CHARGING STATION STATUS</p>
        <p className="text-gray-300 text-sm text-center">{data.isAvailable ? "AVAILABLE" : "UNAVAILABLE"}</p>
        <div className="flex justify-center">
          <p className="text-white text-4xl md:text-6xl font-bold">{data.percentage}%</p>
        </div>
      </div>

      {/* Battery Status */}
      <div className="bg-gray-900 rounded-lg p-4 space-y-4 flex-1">
        <div className="flex justify-center">
          <Battery className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />
        </div>
        <div className="text-center">
          <p className="text-white text-lg md:text-xl">{data.totalPower} (MWh)</p>
          <p className="text-gray-400 text-xs md:text-sm mt-2">총 충전 모니터링</p>
        </div>
      </div>
    </div>
  )
}
