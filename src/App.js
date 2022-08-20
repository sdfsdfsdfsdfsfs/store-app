import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import InfoBar from './components/InfoBar/InfoBar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cases from './pages/Cases/Cases';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Collections from './pages/Collections/Collections';
import Collection from './pages/Collection/Collection';
import Cart from './pages/Cart/Cart';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <InfoBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/cases" element={<Cases />} />
          <Route path="/shop/cases/:id" element={<ItemDetail cart={cart} setCart={setCart} />} />
          <Route path="/shop/collections" element={<Collections />} />
          <Route path="/shop/collections/:slug" element={<Collection />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Cart cart={cart} setCart={setCart} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
