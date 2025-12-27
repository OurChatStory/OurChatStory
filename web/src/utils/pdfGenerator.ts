import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

interface GeneratePDFOptions {
  slideRefs: React.RefObject<HTMLDivElement | null>[];
  filename?: string;
  onProgress?: (current: number, total: number) => void;
}

export async function generatePDF({
  slideRefs,
  filename = "whatsapp-wrapped-2025.pdf",
  onProgress,
}: GeneratePDFOptions): Promise<void> {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [360, 640], // Phone-like aspect ratio
  });

  const totalSlides = slideRefs.length;

  for (let i = 0; i < totalSlides; i++) {
    const slideRef = slideRefs[i];
    
    if (!slideRef.current) continue;

    if (onProgress) {
      onProgress(i + 1, totalSlides);
    }

    try {
      const dataUrl = await htmlToImage.toPng(slideRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#111b21",
      });

      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(dataUrl, "PNG", 0, 0, 360, 640);
    } catch (error) {
      console.error(`Error capturing slide ${i + 1}:`, error);
    }
  }

  pdf.save(filename);
}

// Alternative approach: Generate PDF from a single container with all slides
export async function generatePDFFromContainer(
  containerRef: React.RefObject<HTMLDivElement | null>,
  slideCount: number,
  filename = "whatsapp-wrapped-2025.pdf",
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  if (!containerRef.current) return;

  const container = containerRef.current;
  const slides = container.querySelectorAll("[data-slide]");
  
  if (slides.length === 0) return;

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [360, 640],
  });

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    
    if (onProgress) {
      onProgress(i + 1, slides.length);
    }

    try {
      const dataUrl = await htmlToImage.toPng(slide, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#111b21",
      });

      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(dataUrl, "PNG", 0, 0, 360, 640);
    } catch (error) {
      console.error(`Error capturing slide ${i + 1}:`, error);
    }
  }

  pdf.save(filename);
}

