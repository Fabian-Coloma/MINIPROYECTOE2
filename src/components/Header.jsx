import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Header() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  
  const { carrito } = useContext(CartContext);
  const { favoritos } = useContext(FavoritesContext);
  
  let totalItems = 0;
  for (let i = 0; i < carrito.length; i++) {
    totalItems = totalItems + carrito[i].cantidad;
  }
  
  const manejarBusqueda = (evento) => {
    const texto = evento.target.value;
    setBusqueda(texto); 
    if (texto !== '') {
      navigate('/?search=' + texto);
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
       
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-black text-blue-600 tracking-tighter flex items-center gap-2">
            🛍️ LUXE.
          </Link>
          
        
          <nav className="hidden lg:flex gap-4 text-sm font-medium text-gray-700">
            <Link to="/products/category/electronics" className="hover:text-blue-600">Electronics</Link>
            <Link to="/products/category/jewelery" className="hover:text-blue-600">Jewelry</Link>
            <Link to="/products/category/men's clothing" className="hover:text-blue-600">Men's</Link>
            <Link to="/products/category/women's clothing" className="hover:text-blue-600">Women's</Link>
          </nav>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <input
            type="text"
            value={busqueda}
            onChange={manejarBusqueda}
            placeholder="Search products..."
            className="w-full bg-gray-50 border border-gray-200 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <span className="absolute right-3 top-2 text-gray-400">🔍</span>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/favoritos" className="text-gray-600 hover:text-red-500 relative transition-colors">
            🖤
            {favoritos.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {favoritos.length}
              </span>
            )}
          </Link>
          
          <Link to="/cart" className="text-gray-600 hover:text-blue-600 relative transition-colors">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Perfil" />
          </div>
        </div>

      </div>
    </header>
  );
}