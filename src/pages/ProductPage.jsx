import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from '../components/ProductDetail';

export default function ProductPage() {
  
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError('Error al cargar los detalles del producto.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 font-medium mb-4">{error || 'Producto no encontrado'}</p>
        <Link to="/" className="text-blue-600 hover:underline font-medium">← Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/" className="text-gray-500 hover:text-gray-900 font-medium mb-8 inline-block transition-colors">
        ← Volver al catálogo
      </Link>
   
      <ProductDetail product={product} /> 
    </div>
  );
}