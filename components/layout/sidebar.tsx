"use client"

import type React from "react"

import { Key, BarChart2, Settings, Server, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  subItems?: { label: string; href: string }[]
}

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()

  // 현재 경로에 따라 자동으로 해당 메뉴 확장
  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.subItems && pathname.startsWith(item.href)) {
        setExpandedItem(item.label)
      }
    })
  }, [pathname])

  const menuItems: MenuItem[] = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "대시보드",
      href: "/dashboard",
      subItems: [
        { label: "Overview", href: "/dashboard/overview" },
        { label: "충전소 현황", href: "/dashboard/stations" },
      ],
    },
    {
      icon: <Key className="w-5 h-5" />,
      label: "Key Management",
      href: "/key-management",
      subItems: [
        { label: "키 생성", href: "/key-management/create" },
        { label: "키 관리", href: "/key-management/manage" },
      ],
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      label: "통계 및 이력관리",
      href: "/statistics",
      subItems: [
        { label: "충전 통계", href: "/statistics/charging" },
        { label: "사용 이력", href: "/statistics/usage" },
      ],
    },
    {
      icon: <Server className="w-5 h-5" />,
      label: "시스템 관리",
      href: "/system",
      subItems: [
        { label: "장비 관리", href: "/system/equipment" },
        { label: "사용자 관리", href: "/system/users" },
      ],
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "설정",
      href: "/settings",
    },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const toggleExpand = (label: string) => {
    if (expandedItem === label) {
      setExpandedItem(null)
    } else {
      setExpandedItem(label)
    }
  }

  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col">
      {/* 로고 영역 */}
      <div className="p-6 flex justify-center items-center bg-gray-900">
        <h1 className="text-xl font-bold">LOGO</h1>
      </div>

      {/* 메뉴 영역 */}
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label} className="mb-1">
                {item.subItems ? (
                  // 서브메뉴가 있는 항목
                  <div
                    className={`flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer ${
                      isActive(item.href) ? "bg-gray-700" : ""
                    }`}
                    onClick={() => toggleExpand(item.label)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                    <span className="ml-auto">
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedItem === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                ) : (
                  // 서브메뉴가 없는 항목
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 hover:bg-gray-700 ${
                      isActive(item.href) ? "bg-gray-700" : ""
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* 서브 메뉴 */}
                {item.subItems && expandedItem === item.label && (
                  <ul className="bg-gray-900 py-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className={`block pl-12 pr-4 py-2 hover:bg-gray-700 ${
                            isActive(subItem.href) ? "bg-gray-700" : ""
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
