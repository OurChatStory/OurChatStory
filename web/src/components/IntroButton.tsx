"use client";

interface IntroButtonProps {
  onClick: () => void;
}

export const IntroButton: React.FC<IntroButtonProps> = ({ onClick }) => {
  return (
    <button
      className="px-6 md:px-8 py-4 md:py-6 text-lg md:text-xl font-bold bg-[#25d366] text-[#111b21] rounded-full hover:scale-105 active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
      onClick={onClick}
    >
      Make your wrap
    </button>
  );
};
