import './App.css';
import logo from './assets/logo.svg';
import CallToAcion from './components/callToAction/CallToAcion';
import Offer from './components/offer/Offer';

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <CallToAcion />
      <Offer />
    </div>
  );
}

export default App;
