import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/* ── Helpers ── */
const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]
const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function isToday(d: Date) {
  return isSameDay(d, new Date())
}

/* ── Calendar Component ── */
export interface CalendarProps {
  selected?: Date | null
  onSelect?: (date: Date) => void
  className?: string
}

export function Calendar({ selected, onSelect, className }: CalendarProps) {
  const today = new Date()
  const [viewYear, setViewYear] = React.useState(selected?.getFullYear() ?? today.getFullYear())
  const [viewMonth, setViewMonth] = React.useState(selected?.getMonth() ?? today.getMonth())

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth)

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)

  return (
    <div className={cn("p-3 select-none", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={prevMonth} className="h-7 w-7 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button onClick={nextMonth} className="h-7 w-7 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-1">
        {WEEKDAYS.map(w => (
          <div key={w} className="text-center text-[11px] font-medium text-muted-foreground py-1">{w}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {days.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />
          const date = new Date(viewYear, viewMonth, day)
          const isSelected = selected ? isSameDay(date, selected) : false
          const isTodayDate = isToday(date)

          return (
            <button
              key={day}
              onClick={() => onSelect?.(date)}
              className={cn(
                "h-8 w-8 mx-auto rounded-lg text-sm transition-colors flex items-center justify-center",
                isSelected
                  ? "bg-primary text-primary-foreground font-semibold"
                  : isTodayDate
                    ? "bg-accent text-accent-foreground font-medium"
                    : "hover:bg-accent/50"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
