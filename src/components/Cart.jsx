import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { carrito } = useContext(CartContext);

  // Calculamos el total a pagar de forma tradicional
  let totalPagar = 0;
  for (let i = 0; i < carrito.length; i++) {
    // Multiplicamos el precio del producto por su cantidad
    totalPagar = totalPagar + (carrito[i].price * carrito[i].cantidad);
  }

  // Si no hay productos, mostramos un mensaje amigable
  if (carrito.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-6xl block mb-4">🛒</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-8">¡Agrega algunos productos para empezar!</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          Explorar la tienda
        </Link>
      </div>
    );
  }

  // Si hay productos, mostramos la lista y el total
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu Carrito de Compras</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        
        {/* Lista de productos */}
        {carrito.map((producto) => (
          <div key={producto.id} className="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 py-6 last:border-0 gap-4">
            
            <div className="flex items-center gap-6 w-full md:w-auto">
              <img src={producto.image} alt={producto.title} className="w-20 h-20 object-contain" />
              <div>
                <h3 className="font-medium text-gray-900 max-w-sm">{producto.title}</h3>
                <p className="text-blue-600 font-bold">${producto.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm mt-1">Cantidad: {producto.cantidad}</p>
              </div>
            </div>

            <div className="text-xl font-bold text-gray-900 w-full md:w-auto text-right">
              ${(producto.price * producto.cantidad).toFixed(2)}
            </div>

          </div>
        ))}
        
        {/* Resumen final */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xl font-bold text-gray-600">Total a pagar:</span>
          <span className="text-4xl font-black text-gray-900">
            ${totalPagar.toFixed(2)}
          </span>
        </div>
        
      </div>
    </div>
  );
}