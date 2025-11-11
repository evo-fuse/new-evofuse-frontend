import React from "react";
import { createRoot } from "react-dom/client";

// Import critical CSS first
import "./index.css";

// Import preload utility
import { preloadCriticalComponents } from "./utils/preloadComponents";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Register service worker in production with a delay to not block critical rendering
if (typeof navigator !== "undefined" &&
  "serviceWorker" in navigator &&
  import.meta.env.PROD) {
  // Use requestIdleCallback for service worker registration when browser is idle
  const registerServiceWorker = () => {
    navigator.serviceWorker.register("/service-worker.js")
      .catch(() => {
        console.log("Service worker registration failed");
      });
  };

  // Use requestIdleCallback if available, otherwise setTimeout with a longer delay
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(registerServiceWorker, { timeout: 5000 });
  } else {
    setTimeout(registerServiceWorker, 3000); // Longer delay to ensure main content renders first
  }
}

// Optimize initial render
const rootElement = document.getElementById("root");

if (rootElement) {
  // Create root outside of render to avoid extra work
  const root = createRoot(rootElement);

  // Render App directly (pages are already lazy-loaded)
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  // Preload critical components when browser is idle
  preloadCriticalComponents();
}