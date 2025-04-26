import { redirect } from "next/navigation"

export default function DashboardPage() {
  // 대시보드 페이지에 접근하면 자동으로 overview 페이지로 리다이렉트
  redirect("/dashboard/overview")
}
