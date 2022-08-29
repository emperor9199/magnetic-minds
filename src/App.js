import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import MyBlogs from "./components/MyBlogs/MyBlogs";
import Growth from "./components/Growth/Growth";
import "./App.css";
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
      <Growth />
      <MyBlogs />
      <Footer />
    </>
  );
};

export default App;
