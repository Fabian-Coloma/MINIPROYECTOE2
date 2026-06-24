export default function ProductDetail({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
      {/* Contenedor de la Imagen (Ocupa la mitad en PC) */}
      <div className="md:w-1/2 p-8 flex justify-center items-center bg-white">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-100 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenedor de la Información (Ocupa la otra mitad en PC) */}
      <div className="md:w-1/2 p-8 md:p-12 bg-gray-50 flex flex-col justify-center">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
          {product.category}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {product.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8">
          {product.description}
        </p>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-blue-200">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}