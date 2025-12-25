import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initAnalytics = () => {
  ReactGA.initialize("G-8GG4ESYN0D");
};

// Send a pageview
export const sendPageview = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Send a custom event
export const sendEvent = (eventName, eventParams = {}) => {
  ReactGA.event(eventName, eventParams);
};

// Custom hook for analytics
export const useAnalytics = () => {
  const track = (name, params = {}) => {
    sendEvent(name, params);
  };

  return { track };
};
