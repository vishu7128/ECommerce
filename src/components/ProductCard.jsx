/* eslint-disable react/prop-types */
import LazyLoad from "react-lazyload";

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer"
      onClick={() => onClick(product.id)}
    >
      <LazyLoad height={200} offset={100} once>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </LazyLoad>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-sm text-gray-600">${product.price}</p>
        <p className="text-sm text-gray-600">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
