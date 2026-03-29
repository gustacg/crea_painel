import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Início", path: "/painel" },
];

export const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/painel") return location.pathname === "/painel";
    return location.pathname.startsWith(path);
  };

  const renderNavItem = (item: { icon: React.ElementType; label: string; path: string }) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200",
        collapsed && "justify-center px-0",
        isActive(item.path)
          ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
      title={collapsed ? item.label : undefined}
    >
      <item.icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
      {!collapsed && <span className="truncate">{item.label}</span>}
    </NavLink>
  );

  return (
    <aside
      className={cn(
        "h-full flex flex-col border-r border-border/50 transition-all duration-300 bg-sidebar",
        collapsed ? "w-[68px]" : "w-60"
      )}
    >
      {/* Header */}
      <div className="flex flex-col shrink-0">
        <div
          className={cn(
            "flex items-center h-16 shrink-0 transition-all duration-300",
            collapsed ? "flex-col justify-center gap-0 px-0" : "flex-row justify-between px-4"
          )}
        >
          <div className={cn(
            "flex items-center gap-2 transition-all duration-300",
            collapsed ? "justify-center w-full h-10" : ""
          )}>
            {collapsed ? (
              <img src="/vertical.png" alt="CREA" className="h-8 w-8 object-contain" loading="lazy" />
            ) : (
              <img src="/Logo preta.png" alt="CREA" className="h-6 max-w-[120px] object-contain" loading="lazy" />
            )}
          </div>

          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="h-8 w-8 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Recolher menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          )}
        </div>

        {collapsed && (
          <div className="flex justify-center pb-1">
            <button
              onClick={() => setCollapsed(false)}
              className="h-8 w-8 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Expandir menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-1 px-3 py-2 overflow-y-auto">
        {menuItems.map((item) => renderNavItem(item))}
      </nav>

      {/* Bottom — version tag */}
      <div className="px-3 pb-4">
        <div className={cn(
          "text-[10px] text-muted-foreground/50 text-center py-2",
          collapsed && "hidden"
        )}>
          Painel CREA v1.0
        </div>
      </div>
    </aside>
  );
};
