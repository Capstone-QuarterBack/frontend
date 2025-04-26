"use client"

import { ArrowUp, ArrowDown } from "lucide-react"
import { useState } from "react"

interface StatusData {
  id: number
  date: string
  location: string
  status: string
}

export default function RealTimeStatus() {
  const [activeTab, setActiveTab] = useState("table")

  // 실시간 상태 데이터
  const statusData: StatusData[] = [
    { id: 1, date: "2023/03/20 09:11:00", location: "구로 전력관", status: "가동중지" },
    { id: 2, date: "2023/03/21 08:10:00", location: "구로 전력관", status: "가동중지" },
    { id: 3, date: "2023/03/22 09:09:00", location: "구로 전력관", status: "가동중지" },
    { id: 4, date: "2023/03/22 09:10:00", location: "구로 전력관", status: "가동중지" },
    { id: 5, date: "2023/03/24 08:07:00", location: "구로 전력관", status: "가동중지" },
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-sm">실시간 전기 가격 현황</h2>
        <div className="flex text-xs">
          <button
            className={`px-3 py-1 rounded-l ${activeTab === "table" ? "bg-gray-600" : "bg-gray-700"}`}
            onClick={() => setActiveTab("table")}
          >
            Table
          </button>
          <button
            className={`px-3 py-1 rounded-r ${activeTab === "graph" ? "bg-gray-600" : "bg-gray-700"}`}
            onClick={() => setActiveTab("graph")}
          >
            Graph
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-700 p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-green-400 text-xs">환경 전력 공사</p>
              <p className="text-green-400 text-xl font-bold">₩ 13,911.22</p>
            </div>
            <div className="flex items-center text-green-400">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span className="text-sm">68.29</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-400 text-xs">환경 전력 공사</p>
              <p className="text-red-400 text-xl font-bold">₩ 4,321.89</p>
            </div>
            <div className="flex items-center text-red-400">
              <ArrowDown className="w-4 h-4 mr-1" />
              <span className="text-sm">2.89</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left text-gray-300">
          <tbody>
            {statusData.map((item) => (
              <tr key={item.id} className="border-b border-gray-700">
                <td className="px-2 py-2">{item.date}</td>
                <td className="px-2 py-2">{item.location}</td>
                <td className="px-2 py-2">{item.status}</td>
                <td className="px-2 py-2 text-right">{item.date}</td>
                <td className="px-2 py-2">{item.location}</td>
                <td className="px-2 py-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
