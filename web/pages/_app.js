import { useEffect } from "react";
import { useRouter } from "next/router";
import { initAnalytics, sendPageview } from "../lib/analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    initAnalytics();
  }, []);

  useEffect(() => {
    // Track page views on route change
    const handleRouteChange = (url) => {
      sendPageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("sw.js")
          .then(
            function (registration) {
              // Registration was successful
              console.log(
                "ServiceWorker registration successful with scope: ",
                registration.scope
              );
            },
            function (err) {
              // registration failed :(
              console.log("ServiceWorker registration failed: ", err);
            }
          )
          .catch(function (err) {
            console.log(err);
          });
      });
    } else {
      console.log("service worker is not supported");
    }
  });
  return <Component {...pageProps} />;
}

export default MyApp;
