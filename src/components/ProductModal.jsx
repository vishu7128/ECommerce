/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const ProductModal = ({ productId, onClose }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-11/12 max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-4">{product.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <p className="mt-4 font-semibold text-lg">${product.price}</p>
        <p className="mt-1 text-gray-600">Category: {product.category}</p>
        <p className="mt-1 text-gray-900">In Stock</p>
      </div>
    </div>
  );
};

export default ProductModal;
