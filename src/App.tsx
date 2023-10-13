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
        <GoalDonation />
        <Donation />
        <Donate />
        <DonationTable />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
