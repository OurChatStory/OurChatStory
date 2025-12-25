import { ChatData } from "@/types/chat";

interface GWelcome2Props {
  drawData: ChatData;
}

const GWelcome2 = () => {
  return (
    <div 
      className="flex items-center justify-center gap-4 w-screen h-screen bg-cover bg-no-repeat p-4" 
      style={{ 
        backgroundImage: "url(/static/compress/bg2.webp)", 
        backgroundSize: "120%",
        backgroundRepeat: "no-repeat"
      }}
    >
      <p className="text-black text-4xl text-center">
        But y&apos;all didn&apos;t stop texting each other
      </p>
    </div>
  );
};

export default GWelcome2;
