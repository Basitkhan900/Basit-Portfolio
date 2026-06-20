import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

document.body.className="min-h-screen"
document.body.style.background="radial-gradient(ellipse 80% 60% at 50% -10%, rgba(120,80,220,0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(59,130,246,0.15) 0%, transparent 60%), #06030f"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
