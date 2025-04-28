"use client"

import type React from "react"

import { useState } from "react"
import { Save, RefreshCw, Github } from "lucide-react"

export default function RepositorySettings() {
  const [currentRepo, setCurrentRepo] = useState("https://github.com/username/ev-charging-dashboard.git")
  const [newRepo, setNewRepo] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newRepo) {
      setMessage({ type: "error", text: "새 저장소 URL을 입력해주세요." })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      // 실제 구현에서는 API 호출로 대체
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setCurrentRepo(newRepo)
      setNewRepo("")
      setMessage({ type: "success", text: "저장소 URL이 성공적으로 변경되었습니다." })
    } catch (error) {
      setMessage({ type: "error", text: "저장소 URL 변경 중 오류가 발생했습니다." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Github className="w-6 h-6 mr-2" />
            <h1 className="text-xl font-bold">저장소 설정</h1>
          </div>

          <div className="mb-6">
            <h2 className="text-md font-medium mb-2">현재 저장소 URL</h2>
            <div className="bg-gray-700 p-3 rounded-lg text-sm break-all">{currentRepo}</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="newRepo" className="block text-sm font-medium text-gray-400 mb-2">
                새 저장소 URL
              </label>
              <input
                type="text"
                id="newRepo"
                value={newRepo}
                onChange={(e) => setNewRepo(e.target.value)}
                placeholder="https://github.com/username/new-repository.git"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm"
              />
            </div>

            {message && (
              <div
                className={`p-3 rounded-lg mb-4 ${message.type === "success" ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"}`}
              >
                {message.text}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg mr-2 flex items-center text-sm"
                onClick={() => setNewRepo("")}
              >
                취소
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center text-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    처리 중...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    저장
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-gray-700 pt-4">
            <h2 className="text-md font-medium mb-4">고급 설정</h2>

            <div className="space-y-4">
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600 mr-2" />
                  <span className="text-sm">자동 배포 활성화</span>
                </label>
              </div>

              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600 mr-2" />
                  <span className="text-sm">브랜치 보호 규칙 적용</span>
                </label>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">기본 브랜치</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm">
                  <option>main</option>
                  <option>master</option>
                  <option>develop</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
