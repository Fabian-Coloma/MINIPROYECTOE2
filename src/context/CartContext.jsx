import { createContext, useState, useEffect } from 'react';

// 1. Creamos el contexto (la caja donde guardaremos la info)
export const CartContext = createContext();

// 2. Creamos el Proveedor (el componente que envolverá a nuestra app)
export function CartProvider({ children }) {
  
  // Leemos si ya había algo guardado en la memoria del navegador de visitas anteriores
  const carritoGuardado = JSON.parse(localStorage.getItem('carritoLuxe'));
  
  // Si había algo, lo usamos. Si no, empezamos con un arreglo vacío
  const [carrito, setCarrito] = useState(carritoGuardado || []);

  // Cada vez que la variable 'carrito' cambie, la guardamos automáticamente en el navegador
  useEffect(() => {
    localStorage.setItem('carritoLuxe', JSON.stringify(carrito));
  }, [carrito]);

  // --- Funciones para manipular el carrito ---

  const agregarAlCarrito = (productoNuevo) => {
    // Revisamos si el producto ya está en el carrito
    const existe = carrito.find((item) => item.id === productoNuevo.id);

    if (existe) {
      // Si existe, creamos un nuevo arreglo sumándole 1 a la cantidad
      const carritoActualizado = carrito.map((item) => {
        if (item.id === productoNuevo.id) {
          return { ...item, cantidad: item.cantidad + 1 };
        } else {
          return item;
        }
      });
      setCarrito(carritoActualizado);
    } else {
      // Si no existe, lo agregamos por primera vez con cantidad 1
      const productoConCantidad = { ...productoNuevo, cantidad: 1 };
      setCarrito([...carrito, productoConCantidad]);
    }
  };

  // Por ahora solo exportamos el carrito y la función de agregar
  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
}