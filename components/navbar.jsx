import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};
export default Navbar;
