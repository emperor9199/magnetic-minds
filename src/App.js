import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import MyBlogs from "./components/MyBlogs/MyBlogs";
import Growth from "./components/Growth/Growth";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
// import "antd/dist/antd.css";

const App = () => {
  return (
    <div>
      {/* <HeroSection />
      <Header /> */}
      <Growth />
      <MyBlogs />
      <Footer />
    </div>
  );
};

export default App;
