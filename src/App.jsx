import "react";
import NavBar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/Placeorder/PlaceOrder";

const App = () => {
  console.log("App error");
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter basename="Glutenfree">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
