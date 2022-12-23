import { useContext } from "react";
import useHover from "../hooks/useHover"
import { PictureContext } from "../context/pictureContext";
import PropTypes from 'prop-types';

const Image = ({ className, img }) => {
   const [isHovered, hoverRef] = useHover()

   const { toggleFavorite } = useContext(PictureContext);
   const { addItemToCart } = useContext(PictureContext);
   const { removeItemFromCart } = useContext(PictureContext);
   const { cartItems } = useContext(PictureContext);

   return (
      <div
         className={`${className} image-container`}
         ref={hoverRef}
      >
         <img
            className="image-grid"
            src={img.url}
            alt={img.id}
         />
         {isHovered && (
            <>
               <i
                  className="ri-heart-line favorite"
                  onClick={() => { toggleFavorite(img.id) }}
               ></i>
               {img.isFavorite && (
                  <i
                     className="ri-heart-fill favorite"
                     onClick={() => toggleFavorite(img.id)}
                  ></i>
               )}
               <i
                  className="ri-add-circle-line cart"
                  onClick={() => addItemToCart(img)}
               ></i>
               {cartItems.find(item => item.id === img.id) && (
                  <i
                     className="ri-shopping-cart-fill cart"
                     onClick={() => removeItemFromCart(img.id)}
                  ></i>)}
            </>
         )
         }
      </div >
   );
}

Image.propTypes = {
   className: PropTypes.string,
   img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool
   })
}


export default Image;