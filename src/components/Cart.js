import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {

        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold m-2">Cart</h1>

            <button className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
            >Clear Cart
            </button>

            {cartItems.length == 0 && <h1>Cart is empty! Add something to your cart</h1>}

            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;