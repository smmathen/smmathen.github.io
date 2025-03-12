import React, { useEffect, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Sneak from "./components/Sneak"

function App() {
  const [showSneak, setShowSneak] = useState(false);

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


  return showSneak ? <Sneak /> : (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
