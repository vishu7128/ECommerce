# E-commerce Product List

This is a simple e-commerce product listing page built using React and Redux, where users can filter, sort, and load more products as they scroll. The project demonstrates the use of lazy loading for images, infinite scroll for loading products, and basic product filtering and sorting.

## Features

- **Product Listing:** Displays a grid of products retrieved from an API.
- **Filtering:** Allows users to filter products by category and price.
- **Sorting:** Products can be sorted by price (low to high or high to low).
- **Infinite Scroll:** New products are loaded dynamically as users scroll down the page.
- **Lazy Loading:** Images are lazily loaded to improve performance.
- **Product Modal:** Clicking on a product opens a modal displaying more details about the product.

## Design Decisions

### 1. **State Management with Redux:**

- Redux is used to manage the global state of the product list and loading status.
- `createSlice` from Redux Toolkit is used for simplicity and automatic action creators.
- A `loading` state is managed globally to show a spinner while the data is being fetched.

### 2. **Infinite Scroll:**

- The infinite scroll functionality is implemented by detecting when the user reaches the bottom of the page (`window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight`).
- When this condition is met, more products are loaded by incrementing the page number.

### 3. **Lazy Loading of Images:**

- To optimize performance, the product images are lazily loaded using the `react-lazyload` library. This ensures that images only load when they are about to be viewed by the user.

### 4. **Filters and Sorting:**

- Filters for category and price are stored in the local component state.
- Sorting options (low to high, high to low) are managed with a dropdown selector.
- Filters and sorting are applied before rendering the products, ensuring that the displayed list matches the user's preferences.

### 5. **Component Structure:**

- **ProductList:** The main component that fetches the products, handles filtering, sorting, and triggers loading more products when the user scrolls down.
- **ProductCard:** Displays individual products, including an image, title, price, and category.
- **ProductModal:** Displays a modal with detailed information about a selected product.
- **ProductFilter:** Allows the user to filter the product list based on category and price.
- **LoadingSpinner:** A simple loading spinner that is shown while the products are being fetched.

## Patterns Used

- **Container and Presentational Components:** The `ProductList` acts as a container component managing state and data fetching, while `ProductCard`, `ProductModal`, and `ProductFilter` are presentational components that display the UI.
- **Custom Hooks:** `useEffect` is used to manage side effects, such as fetching products and handling scroll events.
- **Redux Toolkit:** `createSlice` is used for simplifying Redux state management.
- **Lazy Loading:** Images are lazily loaded to improve performance, especially for large product catalogs.

## Optimizations

- **Lazy Loading Images:** The use of lazy loading for images reduces the initial page load time, especially when dealing with large product catalogs.
- **Infinite Scroll:** Instead of loading all products at once, the page dynamically loads more products as the user scrolls, reducing initial load time and improving performance.
- **Redux Toolkit:** Simplifies Redux setup and reduces boilerplate code.

## Known Limitations

- **Filtering with Infinite Scroll:** The current implementation of infinite scroll does not account for filtering and sorting dynamically when new products are fetched. The filtered products may not trigger the "load more" action when the user applies a filter. This issue can be resolved by refactoring the API call to handle both the page number and the filters.
- **Modal Implementation:** The modal only displays basic information. In a more complete application, it could display detailed information, related products, and reviews.

## Future Enhancements

1. **Pagination & API Optimization:**
   - Currently, infinite scroll is implemented, but the server should also support pagination to reduce API calls and improve performance.
2. **Advanced Filtering:**

   - Add more filter options, such as filtering by brand, rating, or custom ranges for price, to enhance the user experience.

3. **Responsive Design:**

   - Ensure the product listing looks good on all screen sizes (currently it’s responsive but can be further refined).

4. **Product Reviews:**

   - Add the ability for users to view product reviews and ratings.

5. **Search Functionality:**

   - Implement a search bar to allow users to search for products by name or description.

6. **Accessibility Improvements:**
   - Ensure all components are fully accessible, with proper ARIA labels and focus management.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-product-list.git
   cd ecommerce-product-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   ```bash
   http://localhost:5173

   ```
