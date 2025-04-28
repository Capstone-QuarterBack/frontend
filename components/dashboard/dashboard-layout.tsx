import ChargingStatus from "./charging-status"
import VehicleInfo from "./vehicle-info"
import AlertSection from "./alert-section"
import type { DashboardData } from "@/types/dashboard"

interface DashboardLayoutProps {
  data: DashboardData
  stationId?: string
}

export default function DashboardLayout({ data, stationId }: DashboardLayoutProps) {
  return (
    <div className="w-full h-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-12 gap-2 p-2 min-h-[300px]">
          {/* Left Section - Charging Status */}
          <div className="col-span-4 flex flex-col">
            <ChargingStatus data={data.chargingStatus} stationId={stationId} />
          </div>

          {/* Middle Section - Vehicle Info */}
          <div className="col-span-5 flex flex-col">
            <VehicleInfo data={data.vehicleInfo} />
          </div>

          {/* Right Section - Alerts */}
          <div className="col-span-3 flex flex-col">
            <AlertSection data={data.alertInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}
