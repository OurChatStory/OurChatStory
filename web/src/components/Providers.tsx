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
    const reloadOnStaleChunk = (event: ErrorEvent | PromiseRejectionEvent) => {
      const rawMessage = event instanceof ErrorEvent ? event.message : event.reason;
      const message = typeof rawMessage === "string" ? rawMessage : rawMessage?.message;

      if (!message) {
        return;
      }

      const isChunkError = /Loading chunk \d+ failed|ChunkLoadError|CSS_CHUNK_LOAD_FAILED/i.test(message);
      if (!isChunkError) {
        return;
      }

      // Avoid reload loops by only forcing a refresh once per session
      if (!sessionStorage.getItem("ocs-chunk-reloaded")) {
        sessionStorage.setItem("ocs-chunk-reloaded", "1");
        window.location.reload();
      }
    };

    window.addEventListener("error", reloadOnStaleChunk);
    window.addEventListener("unhandledrejection", reloadOnStaleChunk);

    return () => {
      window.removeEventListener("error", reloadOnStaleChunk);
      window.removeEventListener("unhandledrejection", reloadOnStaleChunk);
    };
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
