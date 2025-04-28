"use client"

import { useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// Chart.js 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ChargingStationDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="w-full">
      {/* 메인 콘텐츠 영역 */}
      <div className="grid grid-cols-2 gap-4">
        {/* 충전기 01 패널 */}
        <StationPanel id="01" status="사용가능" statusColor="green" />

        {/* 충전기 02 패널 */}
        <StationPanel id="02" status="사용중" statusColor="red" />

        {/* 충전기 03 패널 */}
        <StationPanel id="03" status="사용중" statusColor="red" />

        {/* 충전기 04 패널 (빈 패널) */}
        <div className="bg-gray-800 rounded-lg p-4 min-h-[300px]"></div>
      </div>
    </div>
  )
}

// 충전소 패널 컴포넌트
function StationPanel({ id, status, statusColor }: { id: string; status: string; statusColor: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      {/* 헤더 */}
      <div className="flex items-center mb-4">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${statusColor === "green" ? "bg-green-500" : "bg-red-500"}`}
        >
          {id}
        </div>
        <span className="ml-2">{status}</span>
      </div>

      {/* 사용 내역 헤더 */}
      <h3 className="text-sm mb-2">사용 내역</h3>

      {/* 충전 정보 */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
        <div>
          <div className="text-gray-400">충전 시작 시간</div>
          <div>03/19 11:11:11</div>
        </div>
        <div>
          <div className="text-gray-400">충전 완료 시간</div>
          <div>03/19 11:11:41</div>
        </div>
        <div>
          <div className="text-gray-400">충전 전력량</div>
          <div>30.201(kWh)</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
        <div>
          <div className="text-gray-400">최대 지불 비용</div>
          <div>9,999(kW)</div>
        </div>
        <div>
          <div className="text-gray-400">충전비용</div>
          <div>9,999(kW)</div>
        </div>
        <div>
          <div className="text-gray-400">오류코드</div>
          <div>01</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
        <div>
          <div className="text-gray-400">차량 정보</div>
          <div>TC130395</div>
        </div>
        <div>
          <div className="text-gray-400">현재 충전 상태</div>
          <div>56.03%</div>
        </div>
      </div>

      <div className="mb-4 text-xs">
        <div className="text-gray-400">현재 충전 완료량</div>
        <div>10,295(kWh)</div>
      </div>

      {/* 사용 내역 테이블 */}
      <h3 className="text-sm mb-2">사용 내역</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td className="py-1">2023/04/19 12:04:22</td>
                <td className="py-1">2023/04/19 12:04:30</td>
                <td className="py-1">30.201(kWh)</td>
                <td className="py-1">1040(kW/h)</td>
                <td className="py-1">차량 정보</td>
                <td className="py-1">ASJM-839310</td>
                <td className="py-1">01</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
