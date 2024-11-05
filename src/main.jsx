import'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ContextProvider  from './context/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextProvider>
  <App />
  </ContextProvider>
  </BrowserRouter>
);

