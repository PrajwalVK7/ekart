import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import WishList from "./pages/WishList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/cart' element={<Cart/>}   />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
