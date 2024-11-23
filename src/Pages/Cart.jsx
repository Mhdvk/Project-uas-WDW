import Navbar from '../Components/navbar'
import './Cart.css'
function Cart({ cart, onCheckout}) {
    return (
        <div>
            <Navbar cart = {cart}/>
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} style={{ listStyle: "none" }}>
                            <img src={item.image} style={{ width: "150px" }} />
                            <div>
                                <p> 1 porsi {item.name}</p>
                            </div>
                    </li>
                ))}
            </ul>
            <button className="co" onClick={onCheckout}>Check Out</button>
        </div>
    );
}

export default Cart;