import { useContext, useState } from "react";
import { PictureContext } from "../context/pictureContext";

import CartItem from "../components/CartItem";

const Cart = () => {
   const [isOrdering, setIsOrdering] = useState(false);
   const { cartItems } = useContext(PictureContext);
   const { removeItemFromCart } = useContext(PictureContext);

   const handleOrderClick = () => {
      setIsOrdering(true)
      cartItems.map(item => removeItemFromCart(item.id))
      setTimeout(() => {
         setIsOrdering(false);
      }, 3000)
   }

   const cartItemElements = cartItems.map(item => (
      <CartItem
         key={item.id}
         item={item}

      />
   ))

   return (
      <main className="cart-page">
         {!isOrdering &&
            <>
               {cartItemElements}
               <p className="total-cost">Total: {(cartItems.length * 5.99).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
               <div className="order-button">
                  {cartItems.length > 0 ? (<button onClick={handleOrderClick}>Place Order</button>) : (<p className="cart-text">You have no items in your cart.</p>)}
               </div>
            </>
         }
         {isOrdering && <p className="cart-text">Ordering...</p>}
      </main>
   )
}

export default Cart