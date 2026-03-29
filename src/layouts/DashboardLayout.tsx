import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MobileBottomNav } from "@/components/dashboard/MobileBottomNav";
import { ART } from "@/types/art";

export interface DashboardContextType {
  selectedArt: ART | null;
  setSelectedArt: (art: ART | null) => void;
}

const DashboardLayout: React.FC = () => {
  const [selectedArt, setSelectedArt] = useState<ART | null>(null);

  const contextValue: DashboardContextType = {
    selectedArt,
    setSelectedArt,
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden relative">
      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Full screen canvas content wrapper */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
          <div className="flex-1 overflow-y-auto">
            <Outlet context={contextValue} />
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default DashboardLayout;
