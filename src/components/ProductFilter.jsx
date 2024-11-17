/* eslint-disable react/prop-types */

const ProductFilter = ({ filters, setFilters }) => {
  return (
    <div className="mb-4 flex gap-4">
      <select
        value={filters.category}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, category: e.target.value }))
        }
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men&apos;s Clothing</option>
        <option value="women's clothing">Women&apos;s Clothing</option>
      </select>
      <div className="w-full">
        <input
          type="range"
          min="0"
          max="500"
          value={filters.price}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, price: e.target.value }))
          }
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>Max Price: ${filters.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
