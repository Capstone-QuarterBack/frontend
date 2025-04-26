import { AlertCircle } from "lucide-react"
import type { DashboardData } from "@/types/dashboard"

interface AlertSectionProps {
  data: DashboardData["alertInfo"]
}

export default function AlertSection({ data }: AlertSectionProps) {
  // 버튼 색상 설정 (기본값은 빨간색)
  const buttonColorClass = data.buttonColor === "green" ? "bg-green-500" : "bg-red-600"

  return (
    <div className="space-y-4 h-full">
      {/* Emergency Button */}
      <div className={`${buttonColorClass} rounded-lg p-2 md:p-4 flex items-center justify-center h-10 md:h-12`}>
        <p className="text-white font-bold text-sm md:text-base">중지/중단</p>
      </div>

      {/* Alert Section */}
      <div className="bg-gray-700 rounded-lg p-4 flex-1 flex flex-col items-center justify-center">
        <AlertCircle
          className={`w-8 h-8 md:w-10 md:h-10 ${data.hasIssue ? "text-orange-500" : "text-green-500"} mb-4`}
        />
        <p className="text-white text-center text-sm md:text-base">
          {data.hasIssue ? data.issueType || "장애 문제" : "정상 작동 중"}
        </p>
        {data.contactInfo && <p className="text-white text-center mt-2 text-sm md:text-base">{data.contactInfo}</p>}
      </div>
    </div>
  )
}
