import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroAria from "./components/HeroAria";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import translationsEng from "./locale/translationsEng";
import translationsRu from "./locale/translationsRu";
import "./sass/style.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsUz from "./locale/translationsUz";

i18n.use(initReactI18next).init({
  resources: {
    eng: { translation: translationsEng },
    ru: { translation: translationsRu },
    uz: { translation: translationsUz },
  },
  lng: "eng",
  fallbackLng: "eng",
});

function App() {

  const changeLang = (v: any): void => {
    i18n.changeLanguage(v);
  };

  return (
    <div>
      <Navbar changeLang={changeLang} />
      <HeroAria changeLang={changeLang}/>
      <Features />
      <AboutUs />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
