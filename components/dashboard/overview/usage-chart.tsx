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
  type ChartOptions,
} from "chart.js"

// Chart.js 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function UsageChart() {
  // 차트 데이터
  const data = {
    labels: Array.from({ length: 24 }, (_, i) => i.toString()),
    datasets: [
      {
        label: "시간대별 사용량",
        data: [70, 40, 60, 80, 65, 75, 95, 60, 80, 70, 50, 85, 75, 65, 90, 80, 95, 70, 85, 90, 80, 85, 50, 75],
        borderColor: "#F59E0B",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  }

  // 차트 옵션
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
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
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(50, 50, 50, 0.9)",
      },
    },
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 h-64">
      <h2 className="text-white text-sm mb-4">시간대별 방전량</h2>
      <div className="h-52">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
