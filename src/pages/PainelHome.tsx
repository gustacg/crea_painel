import { useOutletContext } from "react-router-dom";
import { DashboardContextType } from "@/layouts/DashboardLayout";
import { ArtSelector } from "@/components/dashboard/art-review/ArtSelector";
import { ArtDetails } from "@/components/dashboard/art-review/ArtDetails";

const PainelHome = () => {
  const { selectedArt, setSelectedArt } = useOutletContext<DashboardContextType>();

  if (!selectedArt) {
    return (
      <div className="h-full w-full flex justify-center fade-in-up">
        <ArtSelector onSelect={setSelectedArt} />
      </div>
    );
  }

  return (
    <div className="h-full w-full fade-in-up">
      <ArtDetails art={selectedArt} onBack={() => setSelectedArt(null)} />
    </div>
  );
};

export default PainelHome;
