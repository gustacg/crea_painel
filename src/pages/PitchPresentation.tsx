import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

const slidesData = [
  { id: 1, title: "Apresentação Pitch", text: "Primeiro contato visual de impacto." },
  { id: 2, title: "Problema", text: "Detalhes do problema que estamos resolvendo." },
  { id: 3, title: "Solução", text: "Como nossa plataforma ataca as dores do mercado." },
  { id: 4, title: "Diferenciais", text: "Por que escolher a nossa plataforma." },
  { id: 5, title: "Próximos Passos", text: "Vamos explorar a aplicação real agora." },
];

const PitchPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < 5) {
      setCurrentSlide(prev => prev + 1);
    } else {
      navigate("/site");
    }
  };

  const handlePrev = () => {
    if (currentSlide > 1) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Slide 1 Layout
  if (currentSlide === 1) {
    return (
      <div 
        className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-6 text-white text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/Background-1.png')" }}
      >
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
          <img 
            src="/Logo white.png" 
            alt="Logo" 
            className="w-[85%] max-w-[450px] md:max-w-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
          />
          <p className="text-xl md:text-3xl font-medium opacity-90 drop-shadow-md max-w-3xl">
            {slidesData[0].text}
          </p>
        </div>

        <div className="absolute bottom-12 right-12 md:bottom-16 md:right-16 animate-pulse hover:animate-none">
          <button
            onClick={handleNext}
            className="group flex items-center justify-center gap-3 bg-white text-[#4637F4] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Avançar
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // Slides 2 to 5 Layout
  const slideContent = slidesData[currentSlide - 1];

  return (
    <div 
      className="h-screen w-screen p-[6px] md:p-3 overflow-hidden flex flex-col bg-cover bg-center" 
      style={{ backgroundImage: "url('/BG-2.png')" }}
    >
      <div className="w-full h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col relative overflow-hidden shadow-2xl">
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-20 text-center animate-in slide-in-from-bottom-8 fade-in duration-500">
          <span className="text-sm font-bold tracking-widest uppercase text-[#4637F4] mb-4">
            Slide {currentSlide} / 5
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #4637F4, #3E75F6, #4B9DE9, #80BCB2, #C7E36D, #EAF849)" }}>
            {slideContent.title}
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl">
            {slideContent.text}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 w-full flex justify-between px-8 md:px-16 items-center">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-[#4637F4] transition-colors shadow-md hover:shadow-lg"
            aria-label="Retroceder"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={handleNext}
            className="group w-14 h-14 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:scale-105" style={{ backgroundImage: "linear-gradient(to right, #4637F4, #3E75F6, #4B9DE9, #80BCB2, #C7E36D, #EAF849)" }}
            aria-label="Avançar"
          >
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default PitchPresentation;
