export default function StationInfo() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-sm mb-4">충전소 정보 대시보드</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-3 w-24">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">운영중</span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm">Sejong131313</div>
                <div className="text-xs text-gray-400">세종 충전소</div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm">서울특별시 강남구 논현로 209 힐탑빌딩</div>
                <div className="text-xs text-gray-400">서울 강남구 논현동 58</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
