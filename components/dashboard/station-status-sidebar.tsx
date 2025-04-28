"use client"
import { Line } from "react-chartjs-2"
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

export default function StationStatusSidebar() {
  return (
    <div className="space-y-4 px-2">
      {/* 배터리 상태 */}
      <div className="mb-4">
        <h2 className="text-sm text-gray-400 mb-2">ESS 배터리 상태</h2>
        <div className="flex items-center justify-center mb-2">
          <div className="relative w-28 h-14 border-2 border-white rounded-lg flex items-center justify-center">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-white -mr-1"></div>
            <span className="text-xl font-bold">75.28%</span>
          </div>
        </div>
      </div>

      {/* 충전 정보 */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-400 mb-2">충전 정보</h2>
        <div className="text-xs space-y-1">
          <div className="grid grid-cols-4 gap-1">
            <div className="text-gray-400">날짜 & 시간</div>
            <div className="text-gray-400">충전량</div>
            <div className="text-gray-400">전력량</div>
            <div className="text-gray-400">충전기ID</div>
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid grid-cols-4 gap-1">
              <div>2023/04/19 10:12:32</div>
              <div>735.10(kWh)</div>
              <div>365.31(kW)</div>
              <div>CS-29975/CH</div>
            </div>
          ))}
        </div>
      </div>

      {/* 충전 요금 */}
      <div>
        <h2 className="text-sm text-gray-400 mb-2">충전 요금</h2>
        <div className="bg-gray-800 rounded-lg p-2 text-xs">
          <div className="flex justify-between mb-1">
            <span>기본 요금</span>
            <span>100원/kWh</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>할인율</span>
            <span>10%</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>총 요금</span>
            <span>9,999원</span>
          </div>
        </div>
      </div>

      {/* 시간대별 그래프 */}
      <div className="mt-4">
        <div className="bg-gray-800 rounded-lg p-2 border border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs">충전 시간대별 정보</h3>
            <div className="flex items-center text-xs text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-1"></span>
              최근 충전 시간
            </div>
          </div>
          <div className="h-24">
            <ChargingChart />
          </div>
        </div>
      </div>
    </div>
  )
}

// 충전 차트 컴포넌트
function ChargingChart() {
  const data = {
    labels: ["01", "03", "05", "07", "09", "11", "13", "15", "17", "19", "21", "23"],
    datasets: [
      {
        label: "충전량",
        data: [10, 15, 12, 25, 30, 40, 35, 30, 45, 60, 50, 35],
        borderColor: "#d946ef",
        backgroundColor: "rgba(217, 70, 239, 0.2)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
          font: {
            size: 8,
          },
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return <Line data={data} options={options} />
}
