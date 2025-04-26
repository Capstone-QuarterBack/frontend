import { Car, Battery, AlertCircle } from "lucide-react"

export default function EVChargingDashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-12 gap-2 p-4">
          {/* Left Section - Charging Status */}
          <div className="col-span-4 space-y-4">
            {/* Charging Station Status */}
            <div className="bg-gray-700 rounded-lg p-4 space-y-2">
              <p className="text-gray-300 text-sm text-center">CHARGING STATION STATUS</p>
              <p className="text-gray-300 text-sm text-center">AVAILABLE</p>
              <div className="flex justify-center">
                <p className="text-white text-6xl font-bold">35%</p>
              </div>
            </div>

            {/* Battery Status */}
            <div className="bg-gray-900 rounded-lg p-4 space-y-4">
              <div className="flex justify-center">
                <Battery className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-center">
                <p className="text-white text-xl">135 (MWh)</p>
                <p className="text-gray-400 text-sm mt-2">총 충전 모니터링</p>
              </div>
            </div>
          </div>

          {/* Middle Section - Vehicle Info */}
          <div className="col-span-5 space-y-4">
            {/* Time Info */}
            <div className="bg-gray-700 rounded-lg p-2">
              <p className="text-gray-300 text-xs">최초 시작 시간 : 03/19 15:01:20분</p>
              <p className="text-gray-300 text-xs mt-1">예상 종료 시간 시간 : 03/19 20:01:30분</p>
            </div>

            {/* Vehicle Status */}
            <div className="bg-gray-900 rounded-lg p-4 h-48 flex flex-col">
              <p className="text-white mb-2">차량차 정보</p>
              <div className="flex-1 flex items-center justify-center">
                <Car className="w-16 h-16 text-blue-300" />
              </div>
              <div className="mt-2">
                <div className="flex justify-center">
                  <div className="w-3/4">
                    <div className="border-b border-dashed border-gray-600 my-1"></div>
                    <div className="border-b border-dashed border-gray-600 my-1"></div>
                    <div className="border-b border-dashed border-gray-600 my-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Alerts */}
          <div className="col-span-3 space-y-4">
            {/* Emergency Button */}
            <div className="bg-red-600 rounded-lg p-4 flex items-center justify-center h-12">
              <p className="text-white font-bold">중지/중단</p>
            </div>

            {/* Alert Section */}
            <div className="bg-gray-700 rounded-lg p-4 h-48 flex flex-col items-center justify-center">
              <AlertCircle className="w-10 h-10 text-orange-500 mb-4" />
              <p className="text-white text-center">장애 문제</p>
              <p className="text-white text-center mt-2">콜센터 문의</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
