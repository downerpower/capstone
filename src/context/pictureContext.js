import { createContext, useState, useEffect } from "react";

const PictureContext = createContext(null);

const PictureContextProvider = ({ children }) => {
   const [pictureData, setPictureData] = useState([]);
   const [cartItems, setCartItems] = useState([]);

   const URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

   const toggleFavorite = (id) => {
      setPictureData(prevData => prevData.map(photo => photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo))
   }

   const addItemToCart = (img) => {
      setCartItems(prevItems => [...prevItems, img]);
   }

   const removeItemFromCart = (id) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
   }

   useEffect(() => {
      fetch(URL)
         .then(res => res.json())
         .then(data => setPictureData(data))
   }, [])

   return (
      <PictureContext.Provider value={{ pictureData, toggleFavorite, addItemToCart, cartItems, removeItemFromCart }}>
         {children}
      </PictureContext.Provider >
   )
}
export { PictureContextProvider, PictureContext }