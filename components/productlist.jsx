import { useEffect, useState } from "react";
import { API } from "../api/api";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {products.map(p => (
          <div key={p._id}>
            <img src={p.image} width="150" alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <Link to={`/product/${p._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
