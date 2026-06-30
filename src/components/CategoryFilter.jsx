import { Link, useParams } from 'react-router-dom';

export default function CategoryFilter() {
  
  const { category } = useParams(); 

  
  const listaCategorias = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      
      <Link
        to="/"
        className={
          !category 
            ? "bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md" 
            : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium transition-colors"
        }
      >
        All Products
      </Link>

      
      {listaCategorias.map((cat) => {
        let esActiva = category === cat;

        return (
          <Link
            key={cat}
            to={'/products/category/' + cat}
            className={
              esActiva 
                ? "bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md capitalize" 
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium transition-colors capitalize"
            }
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}