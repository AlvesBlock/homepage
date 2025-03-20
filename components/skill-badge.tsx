import {
  Code,
  Server,
  Smartphone,
  FileCode,
  Cloud,
  Database,
  Flame,
  Webhook,
  Container,
  GitBranch,
  Cpu,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  icon: string
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  const getIcon = () => {
    switch (icon) {
      case "php":
        return <Code className="h-4 w-4 mr-1" />
      case "server":
        return <Server className="h-4 w-4 mr-1" />
      case "smartphone":
        return <Smartphone className="h-4 w-4 mr-1" />
      case "file-code":
        return <FileCode className="h-4 w-4 mr-1" />
      case "cloud":
        return <Cloud className="h-4 w-4 mr-1" />
      case "database":
        return <Database className="h-4 w-4 mr-1" />
      case "flame":
        return <Flame className="h-4 w-4 mr-1" />
      case "webhook":
        return <Webhook className="h-4 w-4 mr-1" />
      case "container":
        return <Container className="h-4 w-4 mr-1" />
      case "git-branch":
        return <GitBranch className="h-4 w-4 mr-1" />
      case "code":
        return <Code className="h-4 w-4 mr-1" />
      default:
        return <Cpu className="h-4 w-4 mr-1" />
    }
  }

  return (
    <Badge variant="outline" className="flex items-center justify-center py-3 px-4 h-16">
      {getIcon()}
      <span>{name}</span>
    </Badge>
  )
}

