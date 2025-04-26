export default function StatsSidebar() {
  return (
    <div className="bg-gray-800 rounded-lg p-4 h-full">
      <h2 className="text-white text-sm mb-4">일일 정보</h2>
      <div className="space-y-4">
        <div className="border-b border-gray-700 pb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Usage</span>
            <span className="text-white font-medium">215</span>
          </div>
        </div>
        <div className="border-b border-gray-700 pb-4">
          <div className="flex justify-between items-center">
            <span className="text-amber-500">Profit</span>
            <span className="text-amber-500 font-medium">수익</span>
          </div>
        </div>
        <div className="pb-4">
          <div className="flex justify-between items-center">
            <span className="text-cyan-500">Charge</span>
            <span className="text-cyan-500 font-medium">방전량</span>
          </div>
        </div>
      </div>
    </div>
  )
}
