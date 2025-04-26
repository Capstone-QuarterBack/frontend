import type React from "react"
import Sidebar from "./sidebar"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* 사이드바 */}
      <Sidebar />

      {/* 메인 콘텐츠 */}
      <div className="flex-1 overflow-auto p-4">{children}</div>
    </div>
  )
}
