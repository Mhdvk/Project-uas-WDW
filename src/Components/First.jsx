import Card from "./Card"
import './First.css'
import Navbar from './navbar';

function First({addToCart, cart}){
    return (
        <>
    <Navbar cart={cart}/>

        <div className="Container">
                <div className="row">
                <Card addToCart={addToCart}/>
            </div>
        </div>
        </>
    )
}
export default First