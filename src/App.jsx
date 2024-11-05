import  'react';
import { NavBar } from './components/Navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import  Cart from './pages/Cart/Cart';
import  Home  from './pages/Home/Home.';
import  PlaceOrder from './pages/Placeorder/PlaceOrder.jsx';


const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
       
      </Routes>
    </div>
  );
};

export default App;
