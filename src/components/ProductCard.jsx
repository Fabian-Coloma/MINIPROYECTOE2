import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { CartContext } from '../context/CartContext'; 

export default function ProductCard({ product }) {
  const { favoritos, alternarFavorito } = useContext(FavoritesContext);
  
  
  const { agregarAlCarrito } = useContext(CartContext);

  const esFavorito = favoritos.find((item) => item.id === product.id);

  
  const manejarAgregarCarrito = () => {
    agregarAlCarrito(product);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow relative">
      
      <button 
        onClick={() => alternarFavorito(product)}
        className="absolute top-6 right-6 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
      >
        {esFavorito ? '❤️' : '🤍'}
      </button>

    
      <Link to={`/products/${product.id}`} className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full mix-blend-multiply hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="flex flex-col gap-1 grow">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {product.category}
        </span>
        
        
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 line-clamp-1 hover:underline" title={product.title}>
            {product.title}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mt-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            ⭐ {product.rating?.rate}
          </span>
        </div>
      </div>

      
      <button
        onClick={manejarAgregarCarrito}
        className="w-full bg-[#111827] text-white py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}