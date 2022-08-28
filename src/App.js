import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.css";
import "./MobileApp.css";
import ServiceCards from "./components/ServiceCards/ServiceCards";
import Navbar from "./components/Navbar/Navbar";
import Carousal from "./components/Carousal/Carousal";

// import "antd/dist/antd.css";

// let styleType = window.innerWidth > 1000 ? "App.css" : "MobileApp.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      {/* <Footer /> */}
    </>
    //  <HeroSection />
    // <Header />
    // <ServiceCards />
    // <Footer />
  );
};

export default App;
