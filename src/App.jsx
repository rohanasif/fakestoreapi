import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Product from "./Components/Product";
import QueryProducts from "./Components/QueryProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/limit/:limit" element={<QueryProducts />} />
    </Routes>
  );
}

export default App;
