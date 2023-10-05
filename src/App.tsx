import Navbar from "./components/navbar/Navbar";
import "./App.scss"
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Gallery from "./components/gallery/Gallery";
import Donate from "./components/donate/Donate";
import GoalDonation from "./components/donationGoal/GoalDonation"
import DonationTable from "./components/table/DonationTable";

function App() {
  return (
    <div className="app">
      <div className="main__container">
        <Navbar />
        <Banner />
        <GoalDonation/>
        <Donate />
        <DonationTable/>
        <Gallery />
        {/* <Donation/> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
