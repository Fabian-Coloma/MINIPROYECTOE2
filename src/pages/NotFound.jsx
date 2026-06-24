import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const { products, loading, error } = useFetchProducts();
  const [searchParams] = useSearchParams();
  
  const parametroBusqueda = searchParams.get('search');

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  // Lógica de filtrado desglosada paso a paso
  let productosFiltrados = [];

  if (parametroBusqueda) {
    productosFiltrados = products.filter((producto) => {
      let tituloMinuscula = producto.title.toLowerCase();
      let busquedaMinuscula = parametroBusqueda.toLowerCase();
      
      return tituloMinuscula.includes(busquedaMinuscula);
    });
  } else {
    // Si no buscaron nada, la lista es igual a todos los productos
    productosFiltrados = products;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {parametroBusqueda ? 'Resultados para "' + parametroBusqueda + '"' : 'Nuestros Productos'}
      </h1>
      
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
          <span className="text-4xl block mb-4">🕵️‍♂️</span>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No hay coincidencias</h2>
          <p className="text-gray-500">Intenta buscar con otra palabra clave.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} product={producto} />
          ))}
        </div>
      )}
    </div>
  );
}