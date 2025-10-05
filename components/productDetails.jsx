import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api/api";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    API.get(`/products`).then(res => {
      const item = res.data.find(p => p._id === id);
      setProduct(item);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} width="200" alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
export default ProductDetail;
