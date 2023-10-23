import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="App">
      <h1>FakeStoreAPI Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product">
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} />
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
