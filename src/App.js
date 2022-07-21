import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoBar from './components/InfoBar';
import Header from './components/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Cart from "./pages/Cart/Cart";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <InfoBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/cases/:id" element={<ItemDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Cart />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
