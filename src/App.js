import React, { useEffect, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Sneak from "./components/Sneak";
import TennisPongModal from "./components/TennisPongModal";
import LiveTicker from "./components/LiveTicker";

function shouldShowSneak() {
  try {
    return sessionStorage.getItem("hasSeenSneak") !== "true";
  } catch {
    return false;
  }
}

function App() {
  const [showSneak, setShowSneak] = useState(shouldShowSneak);
  const [isTennisOpen, setIsTennisOpen] = useState(false);

  useEffect(() => {
    document.title = "Shawn Mathen";
    if (!showSneak) return undefined;

    const timeoutId = window.setTimeout(() => {
      sessionStorage.setItem("hasSeenSneak", "true");
      setShowSneak(false);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [showSneak]);

  return showSneak ? (
    <Sneak />
  ) : (
    <div className="text-broadcast-slate min-h-screen">
      <LiveTicker />
      <Navbar />
      <Home onOpenTennis={() => setIsTennisOpen(true)} />
      <About />
      <Skills />
      <Work />
      <TennisPongModal
        isOpen={isTennisOpen}
        onClose={() => setIsTennisOpen(false)}
      />
    </div>
  );
}

export default App;
