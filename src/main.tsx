import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TempoDevtools } from "tempo-devtools";

TempoDevtools.init();

const basename = import.meta.env.BASE_URL; // Check this value if active links still break

function Root() {
  useEffect(() => {
    // Hide loader when React is ready
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0"; // Smooth fade-out effect
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, []);

  return (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
