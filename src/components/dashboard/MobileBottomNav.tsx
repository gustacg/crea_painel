import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Início", path: "/painel" },
];

export const MobileBottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/painel") return location.pathname === "/painel";
    return location.pathname.startsWith(path);
  };

  const NavItem = ({ icon: Icon, label, path }: { icon: React.ElementType; label: string; path: string }) => {
    const active = isActive(path);
    return (
      <NavLink
        to={path}
        className="flex flex-col items-center justify-center flex-1 h-full space-y-1 transition-colors"
      >
        <div className={cn("p-1.5 rounded-xl transition-colors", active ? "bg-primary shadow-sm" : "bg-transparent")}>
          <Icon
            className="h-5 w-5"
            strokeWidth={active ? 2 : 1.5}
            style={{ color: active ? "hsl(var(--primary-foreground))" : undefined }}
          />
        </div>
        <span className={cn("text-[10px] text-muted-foreground", active ? "text-foreground font-semibold" : "")}>
          {label}
        </span>
      </NavLink>
    );
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div
        className="h-16 flex items-center px-2"
        style={{
          backgroundColor: "hsl(var(--background))",
          borderTop: "1px solid hsl(var(--border) / 0.5)",
        }}
      >
        {NAV_ITEMS.map((item) => <NavItem key={item.path} {...item} />)}
      </div>
    </div>
  );
};
