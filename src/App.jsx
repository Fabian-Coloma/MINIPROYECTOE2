import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import Header from './components/Header'; // Importamos el Header
import Footer from './components/Footer'; // Importamos el Footer

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="grow bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/category/:category" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;