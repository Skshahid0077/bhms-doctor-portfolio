import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;