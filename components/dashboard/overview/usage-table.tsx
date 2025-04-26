interface UsageData {
  id: number
  date: string
  chargeType: string
  usage: string
  power: string
  chargeCode: string
}

export default function UsageTable() {
  // 테이블 데이터
  const usageData: UsageData[] = [
    {
      id: 1,
      date: "2023/03/21 08:10:00",
      chargeType: "완속 충전",
      usage: "100(kWh)",
      power: "21.233(kW)",
      chargeCode: "7999999-92",
    },
    {
      id: 2,
      date: "2023/03/21 09:15:00",
      chargeType: "완속 충전",
      usage: "100(kWh)",
      power: "21.233(kW)",
      chargeCode: "7999999-92",
    },
    {
      id: 3,
      date: "2023/03/21 09:10:00",
      chargeType: "완속 충전",
      usage: "100(kWh)",
      power: "21.233(kW)",
      chargeCode: "7999999-92",
    },
    {
      id: 4,
      date: "2023/03/21 09:10:00",
      chargeType: "완속 충전",
      usage: "100(kWh)",
      power: "21.233(kW)",
      chargeCode: "7999999-92",
    },
    {
      id: 5,
      date: "2023/03/21 09:10:00",
      chargeType: "완속 충전",
      usage: "100(kWh)",
      power: "21.233(kW)",
      chargeCode: "7999999-92",
    },
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-sm mb-4">충전기 사용 정보</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs text-gray-400 border-b border-gray-700">
            <tr>
              <th className="px-4 py-2">시간정보</th>
              <th className="px-4 py-2">충전기 타입</th>
              <th className="px-4 py-2">충전기 모델</th>
              <th className="px-4 py-2">사용량</th>
              <th className="px-4 py-2">전력</th>
              <th className="px-4 py-2">충전 코드</th>
            </tr>
          </thead>
          <tbody>
            {usageData.map((item) => (
              <tr key={item.id} className="border-b border-gray-700">
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.chargeType}</td>
                <td className="px-4 py-3">충전기 모델</td>
                <td className="px-4 py-3">{item.usage}</td>
                <td className="px-4 py-3">{item.power}</td>
                <td className="px-4 py-3">{item.chargeCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
