"use client"

import { useState } from "react"
import { AlertCircle, Battery, Clock } from "lucide-react"

interface StationDetailProps {
  stationId: string
}

export default function StationDetail({ stationId }: StationDetailProps) {
  const [activeTab, setActiveTab] = useState("info")

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">충전기 {stationId} 상세 정보</h2>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded ${activeTab === "info" ? "bg-blue-600" : "bg-gray-700"}`}
            onClick={() => setActiveTab("info")}
          >
            기본 정보
          </button>
          <button
            className={`px-3 py-1 text-sm rounded ${activeTab === "history" ? "bg-blue-600" : "bg-gray-700"}`}
            onClick={() => setActiveTab("history")}
          >
            충전 이력
          </button>
          <button
            className={`px-3 py-1 text-sm rounded ${activeTab === "settings" ? "bg-blue-600" : "bg-gray-700"}`}
            onClick={() => setActiveTab("settings")}
          >
            설정
          </button>
        </div>
      </div>

      {activeTab === "info" && (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <Battery className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-md font-medium">충전 상태</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">현재 충전량</p>
                <p className="text-xl font-bold">56.03%</p>
              </div>
              <div>
                <p className="text-gray-400">총 충전 용량</p>
                <p>30.201 kWh</p>
              </div>
              <div>
                <p className="text-gray-400">충전 시작 시간</p>
                <p>03/19 11:11:11</p>
              </div>
              <div>
                <p className="text-gray-400">예상 완료 시간</p>
                <p>03/19 13:45:00</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-md font-medium">알림 정보</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <p className="text-gray-400">오류 코드</p>
                <p>01</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">상태</p>
                <p className="text-green-400">정상</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">마지막 점검일</p>
                <p>2023/04/15</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">다음 점검 예정일</p>
                <p>2023/05/15</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 col-span-2">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-md font-medium">실시간 모니터링</h3>
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-400">현재 전압</p>
                <p>220V</p>
              </div>
              <div>
                <p className="text-gray-400">현재 전류</p>
                <p>16A</p>
              </div>
              <div>
                <p className="text-gray-400">현재 전력</p>
                <p>3.52kW</p>
              </div>
              <div>
                <p className="text-gray-400">충전 모드</p>
                <p>완속 충전</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "history" && (
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-md font-medium mb-4">충전 이력</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-2">날짜</th>
                  <th className="text-left py-2">시작 시간</th>
                  <th className="text-left py-2">종료 시간</th>
                  <th className="text-left py-2">충전량</th>
                  <th className="text-left py-2">비용</th>
                  <th className="text-left py-2">상태</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="border-b border-gray-600">
                    <td className="py-2">2023/04/19</td>
                    <td className="py-2">11:11:11</td>
                    <td className="py-2">12:34:56</td>
                    <td className="py-2">30.201 kWh</td>
                    <td className="py-2">9,999원</td>
                    <td className="py-2">
                      <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">완료</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-md font-medium mb-4">충전기 설정</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">충전 모드</label>
              <select className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-sm">
                <option>완속 충전</option>
                <option>급속 충전</option>
                <option>스마트 충전</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">최대 충전 전력</label>
              <select className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-sm">
                <option>3.3kW</option>
                <option>7.7kW</option>
                <option>11kW</option>
                <option>22kW</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">충전 예약</label>
              <div className="flex space-x-2">
                <input type="time" className="bg-gray-800 border border-gray-600 rounded p-2 text-sm" />
                <input type="date" className="bg-gray-800 border border-gray-600 rounded p-2 text-sm" />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">설정 저장</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
