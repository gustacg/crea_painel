import { BrowserRouter, Routes, Route } from "react-router-dom";

import PitchPresentation from "./pages/PitchPresentation";
import LandingPage from "./pages/LandingPage";
import PainelHome from "./pages/PainelHome";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PitchPresentation />} />
      <Route path="/site" element={<LandingPage />} />
      <Route path="/painel" element={<DashboardLayout />}>
        <Route index element={<PainelHome />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
