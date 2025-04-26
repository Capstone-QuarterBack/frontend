import { Battery } from "lucide-react"
import type { DashboardData } from "@/types/dashboard"

interface ChargingStatusProps {
  data: DashboardData["chargingStatus"]
}

export default function ChargingStatus({ data }: ChargingStatusProps) {
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
