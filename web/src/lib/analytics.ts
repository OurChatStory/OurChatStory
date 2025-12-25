import ReactGA from "react-ga4";
import { GA_TRACKING_ID } from "./constants";

// Initialize Google Analytics
export const initAnalytics = () => {
  if (typeof window !== "undefined") {
    ReactGA.initialize(GA_TRACKING_ID);
  }
};

// Send a pageview
export const sendPageview = (path: string) => {
  if (typeof window !== "undefined") {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

// Send a custom event
export const sendEvent = (eventName: string, eventParams: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined") {
    ReactGA.event(eventName, eventParams);
  }
};

// Custom hook for analytics
export const useAnalytics = () => {
  const track = (name: string, params: Record<string, unknown> = {}) => {
    sendEvent(name, params);
  };

  return { track };
};
