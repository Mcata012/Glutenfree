import   'react';
import './Home.css';
import Header from '../../components/Header/Header.jsx';
import ViewMenu from '../../components/ViewMenu/ViewMenu.jsx';


const Home = () => { 

// eslint-disable-next-line no-undef
const [category, setCategory] = useState('All'); 

  return (
    <div>
      <Header/>
      <ViewMenu category={category} setCategory={setCategory}/>
    </div>
  );
};

export default Home;
