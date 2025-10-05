import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQty, total } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item._id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item._id, Number(e.target.value))}
          />
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};
export default Cart;
