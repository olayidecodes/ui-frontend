import Navbar from "./components/navbar/Navbar";
import "./App.scss"
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Gallery from "./components/gallery/Gallery";
import Donate from "./components/donate/Donate";

function App() {
  return (
    <div className="app">
      <div className="main__container">
        <Navbar />
        <Banner />
        <Donate />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
