import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/* Aquí luego irá nuestro componente Header / Navbar */}
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/category/:category" element={<Home />} /> {/* Reusamos Home para filtrar */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Aquí luego irá nuestro componente Footer */}
    </>
  )
}

export default App;