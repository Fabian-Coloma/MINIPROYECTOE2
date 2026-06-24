import { useParams, useSearchParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter'; // Importamos el nuevo filtro

export default function Home() {
  // 1. Obtenemos la categoría de la URL (si es que hicieron clic en algún botón)
  const { category } = useParams();
  
  // 2. Le pasamos esa categoría a nuestro hook
  const { products, loading, error } = useFetchProducts(category);
  
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Título dinámico: Muestra la categoría activa si existe */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6 capitalize">
        {category ? category : 'Nuestros Productos'}
      </h1>

      {/* Aquí colocamos los botones de filtro */}
      <CategoryFilter />

      {/* Mensaje si buscan algo que no existe */}
      {parametroBusqueda && (
        <p className="text-gray-500 mb-6">
          Resultados para "{parametroBusqueda}":
        </p>
      )}
      
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