import './App.css';
import Carousel from './components/Carousel';
import Counter from './components/Counter/Counter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
     <Carousel/> 
     <Products />
      
      {/* <Pagination /> */}
      <Footer />





    </div>
  );
}

export default App;
