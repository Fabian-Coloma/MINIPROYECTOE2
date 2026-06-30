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

  const eliminarDelCarrito = (idProductoEliminar) => {
    const carritoActualizado = carrito.filter((producto) => {
      return producto.id !== idProductoEliminar;
    });
    setCarrito(carritoActualizado);
  };

  const sumarCantidad = (id) => {
    const carritoActualizado = carrito.map((item) => {
      if (item.id === id) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCarrito(carritoActualizado);
  };

  const restarCantidad = (id) => {
    const producto = carrito.find((item) => item.id === id);
    
    if (producto.cantidad === 1) {
      eliminarDelCarrito(id);
    } else {
    
      const carritoActualizado = carrito.map((item) => {
        if (item.id === id) {
          return { ...item, cantidad: item.cantidad - 1 };
        }
        return item;
      });
      setCarrito(carritoActualizado);
    }
  };

  return (
  
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, sumarCantidad, restarCantidad }}>
      {children}
    </CartContext.Provider>
  );
}