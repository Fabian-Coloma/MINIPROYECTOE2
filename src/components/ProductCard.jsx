import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      {/* Imagen del producto */}
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-white flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Información del producto */}
      <div className="flex flex-col gap-1 grow">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-medium text-gray-900 line-clamp-2" title={product.title}>
          {product.title}
        </h3>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            ⭐ {product.rating?.rate}
          </span>
        </div>
      </div>

      {/* Botón de acción */}
      <Link
        to={`/products/${product.id}`}
        className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors"
      >
        Ver detalles
      </Link>
    </div>
  );
}