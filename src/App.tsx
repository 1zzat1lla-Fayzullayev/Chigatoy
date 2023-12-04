import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import HeroAria from "./components/HeroAria";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import "./sass/style.scss";
function App() {
  return (
    <div>
      <Navbar />
      <HeroAria />
      <Features />
      <AboutUs />
      <Menu />
    </div>
  );
}

export default App;
