import './App.css';
import Landing from './modules/Landing';
import { HashRouter, Routes, Route } from "react-router-dom";
import Products from './modules/Products';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Services from './modules/Services';
import ProductDetail from './modules/ProductDetail';

function App() {
  return (
    <html className="App">
      <header>
        <Header/>
      </header>
      
      <body>
      
      <HashRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Landing />} />
          <Route path="products" element={<Products/>}/>
          <Route path="products/:productId" element={<ProductDetail/>}/>
          <Route path="services" element={<Services/>} />
        </Route>
      </Routes>
    </HashRouter>
      </body>
      <Footer/>
    </html>
  );
}

export default App;
