import "./App.css";
import {useEffect} from 'react'
import BottomBar from "./components/BottomBar";
import BottomHero from "./components/BottomHero";
import Category from "./components/Category";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LogoBar from "./components/LogoBar";
import Team from "./components/Team";
import TopHero from "./components/TopHero";
import Whitepaper from "./components/Whitepaper";
import Aos from 'aos';
import "aos/dist/aos.css";
import TopHeroMobile from "./components/TopHeroMobile";



function App() {
  useEffect(() => {
    Aos.init({ duration: 500})
     })
  return (
    <div className="App">
      <div className="header">
        <LogoBar />
        <TopHeroMobile/>
        <TopHero />
      </div>
      <div className="relative">
      <Category />
        <div className="absolute">
        <Whitepaper/>
        </div>
      </div>
     
    
      <Team/>
      <BottomHero />
      <Contact/>
      <BottomBar/>
      <Footer/>
    </div>
  );
}

export default App;
