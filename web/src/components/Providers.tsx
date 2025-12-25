"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics, sendPageview } from "@/lib/analytics";

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (pathname) {
      sendPageview(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    // Register service worker for PWA
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("ServiceWorker registration successful:", registration.scope);
          })
          .catch((err) => {
            console.log("ServiceWorker registration failed:", err);
          });
      });
    }
  }, []);

  return <>{children}</>;
}
