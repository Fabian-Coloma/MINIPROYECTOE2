import { useState, useEffect } from 'react';
import axios from 'axios';

// Ahora recibimos "categoriaSeleccionada" como parámetro
export const useFetchProducts = (categoriaSeleccionada) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Empezamos con la URL general
        let url = 'https://fakestoreapi.com/products';

        // Si el usuario eligió una categoría, cambiamos la URL
        if (categoriaSeleccionada) {
          url = 'https://fakestoreapi.com/products/category/' + categoriaSeleccionada;
        }

        const response = await axios.get(url);
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError('Error al cargar los productos. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoriaSeleccionada]); // Le decimos a React que vuelva a ejecutar esto si la categoría cambia

  return { products, loading, error };
};