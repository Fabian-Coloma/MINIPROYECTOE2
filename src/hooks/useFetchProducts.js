import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchProducts = (categoriaSeleccionada) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        let url = 'https://fakestoreapi.com/products';

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
  }, [categoriaSeleccionada]); 

  return { products, loading, error };
};