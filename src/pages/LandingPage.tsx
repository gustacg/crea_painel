import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LandingPage = () => (
  <div className="h-screen w-screen overflow-hidden bg-white relative">
    <iframe 
      src="/creama-home.html" 
      className="w-full h-full border-0"
      title="CREA-MA Home"
    />
  </div>
);

export default LandingPage;
