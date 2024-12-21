import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface UsageLimitProps {
  usageCount: number | null
  maxUsage?: number
}

export const UsageLimit = ({ usageCount, maxUsage = 3 }: UsageLimitProps) => {
  if (usageCount === null) return null

  const remaining = usageCount

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">免费分析次数</span>
        <Badge variant={remaining > 0 ? "secondary" : "destructive"}>
          剩余 {remaining} 次
        </Badge>
      </div>

      {remaining <= 0 && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>已达使用限制</AlertTitle>
          <AlertDescription>
            您已用完所有免费分析次数。如需要更多次服务，请使用支付宝或微信扫码付款。19.9￥/次，79.9￥/5次。请在付款时备注您的邮箱地址，并将付款截图发给客服，我们将尽快为您开通服务！
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}