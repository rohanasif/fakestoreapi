import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const QueryProducts = () => {
  const [someProducts, setSomeProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => setSomeProducts(res.data));
  }, [limit]);
  console.log(someProducts);
  return (
    <div className="App">
      <h1>FakeStoreAPI Products</h1>
      <div className="product-list">
        {someProducts.map((product) => (
          <Link to={`/limit/${limit}`} key={limit}>
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

export default QueryProducts;
