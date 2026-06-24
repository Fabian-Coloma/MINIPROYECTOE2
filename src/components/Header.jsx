import { useState, useContext } from 'react'; // Agregamos useContext
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Importamos el contexto

export default function Header() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  
  // Extraemos el carrito de nuestro contexto global
  const { carrito } = useContext(CartContext);
  
  // Calculamos cuántos productos hay en total sumando las cantidades
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
        
        <Link to="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          LUXE.
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <input
            type="text"
            value={busqueda}
            onChange={manejarBusqueda}
            placeholder="Buscar productos..."
            className="w-full bg-gray-50 border border-gray-200 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <span className="absolute right-3 top-2 text-gray-400">🔍</span>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-600 hover:text-blue-600 transition-colors">🤍</button>
          
          {/* Reemplazamos el <button> por un <Link to="/cart"> */}
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