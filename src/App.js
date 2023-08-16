import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/UI/Hero"
import { Experiencia } from "./components/UI/Experiencia"
import Portafolio from "./components/UI/Portafolio";


function App() {

  useEffect(() => {
    //Animation 
    Aos.init();
  }, []);


  return (
    <>
      {/* <style>
      </style> */}
      <Header />
      <main>
        <Hero />
        <Experiencia />
        <Portafolio />
      </main>
      <Footer />

    </>
  );
}

export default App;
