import { useState, useEffect, useRef } from "react";

const useHover = () => {
   const [isHovered, setIsHovered] = useState(false);

   const hoverRef = useRef(null);

   const handleMouseEnter = () => {
      setIsHovered(true);
   }

   const handleMouseLeave = () => {
      setIsHovered(false);
   }

   useEffect(() => {
      hoverRef.current.addEventListener("mouseenter", handleMouseEnter)
      hoverRef.current.addEventListener("mouseleave", handleMouseLeave)

      let current = hoverRef.current

      return () => {
         current.removeEventListener("mouseenter", handleMouseEnter)
         current.removeEventListener("mouseleave", handleMouseLeave)
      }

   }, [])

   return [isHovered, hoverRef]
}

export default useHover;