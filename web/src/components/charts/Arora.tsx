import { ChatData } from "@/types/chat";

interface AroraProps {
  drawData: ChatData;
}

const getArora = () => {
  let arora = "";

  const days_gap = 1;
  const chat_responsiveness = 0.5;

  if (days_gap < 2) arora += "SoulMates";

  if (chat_responsiveness > 0.85) arora += "Besties";
  else if (chat_responsiveness < 0.85) arora += "Friends";
  else if (chat_responsiveness < 0.5) arora += "Acquaintances";
  else if (chat_responsiveness < 0.25) arora += "Strangers";

  return arora;
};

const Arora = ({ drawData }: AroraProps) => {
  const aroraText = getArora();

  return (
    <div
      className="flex flex-col items-center justify-start gap-4 w-full h-[78vh] rounded-2xl pt-4 pb-4 border-2 border-[#fcea2b] bg-[#6f0cbb] bg-blend-multiply bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/static/dark/v2bg6.webp)",
        animation: "zoomBackground 40s ease-in infinite alternate",
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      <p className="text-4xl text-white font-semibold text-center w-full">
        MAGIC ARORA
      </p>

      <p className="text-2xl text-white text-left w-full">
        Arora: {aroraText}
      </p>

      <style jsx>{`
        @keyframes zoomBackground {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 100% 0;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Arora;
