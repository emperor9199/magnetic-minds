import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
// import "antd/dist/antd.css";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Header />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
