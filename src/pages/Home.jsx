import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';

export default function Home() {
  // 1. Llamamos a nuestro hook para traer los datos
  const { products, loading, error } = useFetchProducts();

  // 2. Manejamos el estado de carga (Spinner)
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // 3. Manejamos posibles errores de la API
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  // 4. Mostramos el grid de productos si todo sale bien
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Nuestros Productos</h1>
      
      {/* Grid responsivo: 1 columna en móvil, 2 en tablet, 4 en PC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}