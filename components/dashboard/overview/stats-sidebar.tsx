// 날짜 표시 추가 및 텍스트 변경

export default function StatsSidebar() {
  // 현재 날짜 포맷팅
  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <div className="bg-gray-800 rounded-lg p-4 h-full">
      <h2 className="text-white text-sm mb-2">일일 정보</h2>
      <p className="text-gray-400 text-xs mb-4">{today} 기준</p>
      <div className="space-y-4">
        <div className="border-b border-gray-700 pb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">사용량</span>
            <span className="text-white font-medium">215</span>
          </div>
        </div>
        <div className="border-b border-gray-700 pb-4">
          <div className="flex justify-between items-center">
            <span className="text-amber-500">수익</span>
            <span className="text-amber-500 font-medium">₩12,450</span>
          </div>
        </div>
        <div className="pb-4">
          <div className="flex justify-between items-center">
            <span className="text-cyan-500">충전량</span>
            <span className="text-cyan-500 font-medium">85.7 kWh</span>
          </div>
        </div>
      </div>
    </div>
  )
}
