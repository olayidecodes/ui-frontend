import Navbar from './components/navbar/Navbar';
import './App.scss';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Gallery from './components/gallery/Gallery';
import GoalDonation from './components/donationGoal/GoalDonation';
import Donate from './components/donate/Donate';
import DonationTable from './components/table/DonationTable';
import Donation from './components/donation/Donation';

function App() {
  return (
    <div className='app'>
      <div className='main__container'>
        <Navbar />
        <Banner />
        <GoalDonation goal={"$200,000,000.00"} currentAmount={"$50,986,908.00"}/>
        <Donation />
        {/* <Donate /> */}
        <DonationTable />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
