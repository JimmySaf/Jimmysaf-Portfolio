import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        transition-all duration-500 ease-out
        ${isVisible 
          ? "opacity-100 scale-100 translate-y-0" 
          : "opacity-0 scale-75 translate-y-4 pointer-events-none"
        }
      `}
    >
      {/* Progress Ring */}
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 45}`}
          strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
          className="transition-all duration-150 ease-out"
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />   {/* orange-500 */}
            <stop offset="100%" stopColor="#eab308" /> {/* yellow-500 */}
          </linearGradient>
        </defs>
      </svg>

      {/* Button background + glow */}
      <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 shadow-[0_0_20px_rgba(249,115,22,0.45)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(249,115,22,0.65)] hover:scale-105" />

      {/* Arrow */}
      <svg
        className="relative z-10 text-white"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;