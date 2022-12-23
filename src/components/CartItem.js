import { useContext } from "react";
import useHover from "../hooks/useHover"
import { PictureContext } from "../context/pictureContext";
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
   const [isHovered, hoverRef] = useHover()

   const { removeItemFromCart } = useContext(PictureContext);

   return (
      <div className="cart-item">
         <i
            className={isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
            onClick={() => removeItemFromCart(item.id)}
            ref={hoverRef}
         >
         </i>
         <img src={item.url} width="130px" alt={item.id} />
         <p>$5.99</p>
      </div>
   );
}

CartItem.propTypes = {
   item: PropTypes.shape({
      url: PropTypes.string.isRequired
   })
}


export default CartItem;