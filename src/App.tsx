import './App.css';
import logo from './assets/logo.svg';
import CallToAcion from './components/callToAction/CallToAcion';
import Offer from './components/offer/Offer';
import laptop from './assets/laptop.svg';
import tablet from './assets/tablet.svg';
import swapDevices from './assets/swapDevices.svg';
import repair from './assets/repair.svg';
import EmailInput from './components/emailInput/EmailInput';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <CallToAcion />
      <Offer
        reverse
        offerHeadtop='Buy certified'
        offerHead='pre-owned devices'
        offerBody='New devices are great but pocket and planet-friendly devices are greater.'
        icon={laptop}
      />

      <Offer
        offerHeadtop='Sell your old'
        offerHead='devices for cash'
        offerBody='Who needs dust when your old devices can rake in cool cash.'
        icon={tablet}
      />

      <Offer
        reverse
        offerHeadtop='Swap your'
        offerHead='current devices'
        offerBody='With a single click, you can swap your current device(s) for new or pre-owned devices, fast and easy.'
        icon={swapDevices}
      />

      <Offer
        offerHeadtop='Repair your'
        offerHead='faulty devices'
        offerBody='You break it, we fix it... Don’t worry, be happy.'
        icon={repair}
      />

      <div className="subscribe_prompt">
        <p className="subscribe_prompt_text">A better way to stay connected with trendy tech without breaking the bank.</p>
        <p>
          <EmailInput containerClass='subscribe_prompt_input' />
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
