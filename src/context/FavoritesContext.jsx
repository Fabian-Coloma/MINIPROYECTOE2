import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const favoritosGuardados = JSON.parse(localStorage.getItem('favoritosLuxe'));
  
  
  const [favoritos, setFavoritos] = useState(favoritosGuardados || []);

  
  useEffect(() => {
    localStorage.setItem('favoritosLuxe', JSON.stringify(favoritos));
  }, [favoritos]);

  
  const alternarFavorito = (producto) => {
    const existe = favoritos.find((item) => item.id === producto.id);

    if (existe) {
      
      const nuevaLista = favoritos.filter((item) => item.id !== producto.id);
      setFavoritos(nuevaLista);
    } else {
      
      setFavoritos([...favoritos, producto]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, alternarFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}