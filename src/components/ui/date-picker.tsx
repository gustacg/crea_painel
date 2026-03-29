import * as React from "react"
import { CalendarDays } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

export interface DatePickerProps {
  value?: Date | null
  onChange?: (date: Date) => void
  placeholder?: string
  className?: string
}

export function DatePicker({ value, onChange, placeholder = "Selecionar data", className }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  // Close on click outside
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const formatted = value
    ? value.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
    : null

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={cn(
          "flex h-9 w-full items-center gap-2 rounded-lg border border-input bg-background px-3 text-sm shadow-sm transition-colors hover:bg-accent/50",
          !formatted && "text-muted-foreground"
        )}
      >
        <CalendarDays className="h-4 w-4 text-muted-foreground shrink-0" />
        <span className="truncate">{formatted ?? placeholder}</span>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-popover border border-border rounded-xl shadow-lg animate-in fade-in-0 zoom-in-95">
          <Calendar
            selected={value}
            onSelect={(d) => { onChange?.(d); setOpen(false) }}
          />
        </div>
      )}
    </div>
  )
}
