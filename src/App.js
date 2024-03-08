import About from './component/About';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';

import { Routes , Route } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <div className="App"  >
    <div className="container mw-100">
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      
      </Routes>

      


      </div>
      </div>
    
  );
}

export default App;
