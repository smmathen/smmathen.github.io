import React, { useEffect, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Sneak from "./components/Sneak";
import TennisPongModal from "./components/TennisPongModal";
import LiveTicker from "./components/LiveTicker";

function App() {
  const [showSneak, setShowSneak] = useState(false);
  const [isTennisOpen, setIsTennisOpen] = useState(false);

  useEffect(() => {
    document.title = "Shawn Mathen";
    const hasSeenSneak = sessionStorage.getItem("hasSeenSneak");
    if (!hasSeenSneak) {
      setShowSneak(true);
      setTimeout(() => {
        sessionStorage.setItem("hasSeenSneak", "true");
        setShowSneak(false);
      }, 3000);
    }
  }, []);

  return showSneak ? (
    <Sneak />
  ) : (
    <div className="bg-broadcast-bg text-broadcast-slate min-h-screen">
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
