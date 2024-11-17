import ProductList from "./components/ProductList";

const App = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <header className="p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-center">E-commerce Dashboard</h1>
      </header>
      <section className="p-4">
        <ProductList />
      </section>
    </main>
  );
};

export default App;
