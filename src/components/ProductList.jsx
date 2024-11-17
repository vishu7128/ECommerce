import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProducts,
  selectProducts,
  selectStatus,
} from "../store/products/productSlice";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import ProductModal from "./ProductModal";
import ProductFilter from "./ProductFilter";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectStatus);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "",
    price: 500,
  });
  const [sort, setSort] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Load products based on filters and sorting
    dispatch(loadProducts({ page, filters, sort }));
  }, [page, filters, sort, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        (!filters.category || product.category === filters.category) &&
        product.price <= filters.price
    )
    .sort((a, b) => {
      if (sort === "priceLowToHigh") return a.price - b.price;
      if (sort === "priceHighToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <ProductFilter filters={filters} setFilters={setFilters} />
      <div className="mb-4 flex justify-end">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="default">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={(id) => setSelectedProduct(id)}
          />
        ))}
      </div>
      {status === "loading" && <LoadingSpinner />}
      {selectedProduct && (
        <ProductModal
          productId={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
