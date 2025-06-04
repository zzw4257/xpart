import React, { useState } from 'react';
import CoverSlide from './slides/CoverSlide';
import IntroductionSlide from './slides/IntroductionSlide';
import ArchitectureSlide from './slides/ArchitectureSlide';
import ShellHighlightSlide from './slides/ShellHighlightSlide';
import FilesystemHighlightSlide from './slides/FilesystemHighlightSlide';
import SyscallsHighlightSlide from './slides/SyscallsHighlightSlide';
import ElfExecutionSlide from './slides/ElfExecutionSlide';
import AchievementsSlide from './slides/AchievementsSlide';
import StatusFutureSlide from './slides/StatusFutureSlide';
import LiveDemoSlide from './slides/LiveDemoSlide';
import ConclusionSlide from './slides/ConclusionSlide';
import QASlide from './slides/QASlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder slides
const slides = [
  { id: 1, component: <CoverSlide />, name: "Cover" },
  { id: 2, component: <IntroductionSlide />, name: "Introduction & Ambition" },
  { id: 3, component: <ArchitectureSlide />, name: "System Overview & Architecture" },
  { id: 4, component: <ShellHighlightSlide />, name: "Highlight 1: The Modern XPart Shell" },
  { id: 5, component: <FilesystemHighlightSlide />, name: "Highlight 2: Dual Filesystem Mode" },
  { id: 6, component: <SyscallsHighlightSlide />, name: "Highlight 3: Rich & Robust Syscalls" },
  { id: 7, component: <ElfExecutionSlide />, name: "Highlight 4: Robust ELF Execution" },
  { id: 8, component: <AchievementsSlide />, name: "Key Achievements & Course Compliance" },
  { id: 9, component: <StatusFutureSlide />, name: "Status, Demo & Future" },
  { id: 10, component: <LiveDemoSlide />, name: "Live Demo" },
  { id: 11, component: <ConclusionSlide />, name: "Conclusion & Acknowledgements" },
  { id: 12, component: <QASlide />, name: "Q&A" },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-4 font-sans">
      <div className="w-full max-w-6xl p-6 bg-gray-800 shadow-2xl rounded-xl ring-1 ring-gray-700">
        {/* Current Slide Content */}
        <div className="slide-content mb-8 text-center text-xl min-h-[650px] flex items-center justify-center overflow-hidden">
          {slides[currentSlide].component || slides[currentSlide].content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 text-lg shadow-md"
          >
            <ChevronLeft size={24} className="mr-2" />
            Previous
          </button>
          <div className="text-lg text-gray-400">
            Slide {currentSlide + 1} / {slides.length} ({slides[currentSlide].name})
          </div>
          <button
            onClick={nextSlide}
            className="flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 text-lg shadow-md"
          >
            Next
            <ChevronRight size={24} className="ml-2" />
          </button>
        </div>
      </div>
      {/* Removed the old slide counter below the box as it's now inside */}
    </div>
  );
}

export default App;
