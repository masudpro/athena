import './App.css';
import Banner from './Component/Banner/Banner';
import Subscribe from './Component/Subscribe/Subscribe';
import Footer from './Component/Footer/Footer';
import AboutUs from './Component/AboutUs/AboutUs';
import Pricing from './Component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Pricing></Pricing>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
