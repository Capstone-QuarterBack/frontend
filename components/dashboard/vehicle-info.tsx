import { Car } from "lucide-react"
import type { DashboardData } from "@/types/dashboard"

interface VehicleInfoProps {
  data: DashboardData["vehicleInfo"]
}

export default function VehicleInfo({ data }: VehicleInfoProps) {
  return (
    <div className="space-y-4 h-full">
      {/* Time Info */}
      <div className="bg-gray-700 rounded-lg p-2">
        <p className="text-gray-300 text-xs">최초 시작 시간 : {data.startTime}</p>
        <p className="text-gray-300 text-xs mt-1">예상 종료 시간 시간 : {data.estimatedEndTime}</p>
      </div>

      {/* Vehicle Status */}
      <div className="bg-gray-900 rounded-lg p-4 flex-1 flex flex-col">
        <p className="text-white mb-2 text-sm md:text-base">차량차 정보</p>
        <div className="flex-1 flex items-center justify-center">
          <Car className="w-12 h-12 md:w-16 md:h-16 text-blue-300" />
        </div>
        <div className="mt-2">
          <div className="flex justify-center">
            <div className="w-3/4">
              {data.vehicleId && <div className="text-center text-gray-400 text-xs mb-1">{data.vehicleId}</div>}
              {data.vehicleType && <div className="text-center text-gray-400 text-xs mb-1">{data.vehicleType}</div>}
              <div className="border-b border-dashed border-gray-600 my-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
