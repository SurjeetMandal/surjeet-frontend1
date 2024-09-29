import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Prizing from './components/Prizing';
import Product from './components/Product'
import Nav from './components/Nav';
import Footer from './components/footer';

function App() {

  return (
    <div className='font-cusFont'>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Prizing' element={<Prizing />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
