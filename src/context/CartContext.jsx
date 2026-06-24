import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const carritoGuardado = JSON.parse(localStorage.getItem('carritoLuxe'));
  const [carrito, setCarrito] = useState(carritoGuardado || []);

  useEffect(() => {
    localStorage.setItem('carritoLuxe', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (productoNuevo) => {
    const existe = carrito.find((item) => item.id === productoNuevo.id);

    if (existe) {
      const carritoActualizado = carrito.map((item) => {
        if (item.id === productoNuevo.id) {
          return { ...item, cantidad: item.cantidad + 1 };
        } else {
          return item;
        }
      });
      setCarrito(carritoActualizado);
    } else {
      const productoConCantidad = { ...productoNuevo, cantidad: 1 };
      setCarrito([...carrito, productoConCantidad]);
    }
  };

  // --- NUEVA FUNCION: Eliminar del carrito ---
  const eliminarDelCarrito = (idProductoEliminar) => {
    // Filtramos la lista: nos quedamos con todos los que NO tengan ese ID
    const carritoActualizado = carrito.filter((producto) => {
      return producto.id !== idProductoEliminar;
    });
    
    // Actualizamos el estado con la nueva lista
    setCarrito(carritoActualizado);
  };

  // No olvides exportar la nueva función aquí abajo
  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CartContext.Provider>
  );
}