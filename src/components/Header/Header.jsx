import 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();

  const handleViewMenuClick = () => {
    navigate('/view-menu');
  };

  return (
    <div className='header'>
      <div className='header-content'>
        <h2>Order your favorite gluten-free food</h2> 
        <p>From comforting classics to vibrant, fresh creations, every dish is designed to satisfy and celebrate the joys of gluten-free living. <br/> Here, you’ll find that flavor and texture are never sacrificed—just pure, delicious moments for everyone at the table.</p> 
        <button onClick={handleViewMenuClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
