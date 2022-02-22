import "./App.css";
import BottomBar from "./components/BottomBar";
import BottomHero from "./components/BottomHero";
import Category from "./components/Category";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LogoBar from "./components/LogoBar";
import Team from "./components/Team";
import TopHero from "./components/TopHero";
import Whitepaper from "./components/Whitepaper";

function App() {
  return (
    <div className="App">
      <div className="header">
        <LogoBar />
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
