import Navbar from './Navbar'
import './App.css'
import Hero from './Hero.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarBoxes from './CarBoxes.jsx';
import RotatingCarImage from './RotatingCarImage.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import LeftImageRightText from './LeftImageRightText.jsx';
import AutoScrollingImage from './AutoScrollingImage.jsx';
import CarAccordion from './CarAccordion.jsx';
import Footer from './Footer.jsx'

function App() {
 

  return (
    <>
   <Navbar/>
   <Hero/>
   <CarBoxes/>
   <RotatingCarImage/>
   <WhyChooseUs/>
   <LeftImageRightText/>
   <CarAccordion/>
   <AutoScrollingImage/>
<Footer/>
    </>
  )
}

export default App
