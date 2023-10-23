import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-product">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
export default Product;
