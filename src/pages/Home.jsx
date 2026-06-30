import { useParams, useSearchParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { category } = useParams();
  const { products, loading, error } = useFetchProducts(category);
  const [searchParams] = useSearchParams();
  const parametroBusqueda = searchParams.get('search');

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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

  let productosFiltrados = [];
  if (parametroBusqueda) {
    productosFiltrados = products.filter((producto) => {
      let tituloMinuscula = producto.title.toLowerCase();
      let busquedaMinuscula = parametroBusqueda.toLowerCase();
      return tituloMinuscula.includes(busquedaMinuscula);
    });
  } else {
    productosFiltrados = products;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
      
   
      {!parametroBusqueda && !category && (
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden mb-12 flex items-center shadow-lg">
          
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Fondo banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <span className="text-blue-400 font-bold text-xs tracking-wider bg-blue-900/50 px-3 py-1 rounded-full">
              NEW COLLECTION 2024
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
              Redefine Your <br /><span className="text-blue-500">Everyday Style</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md text-sm md:text-base">
              Explore our curated selection of premium electronics and high-fashion apparel tailored for the modern lifestyle.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Shop Collection
              </button>
              <button className="bg-transparent border border-gray-400 hover:border-white text-white font-bold py-2 px-6 rounded-lg transition-colors">
                View Deals
              </button>
            </div>
          </div>
        </div>
      )}

      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {category ? category.toUpperCase() : 'Trending Now'}
        </h1>
        <p className="text-gray-500 text-sm">Our most popular items this week</p>
      </div>
      
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-2">No hay coincidencias</h2>
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