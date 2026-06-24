import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart'; // Importamos la página del carrito

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/category/:category" element={<Home />} />
          <Route path="/cart" element={<Cart />} /> {/* Nueva ruta del carrito */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;