import { useContext } from "react";
import { PictureContext } from "../context/pictureContext";

import Image from "../components/Image";
import getClass from "../utils/index";

const Photos = () => {
   const { pictureData } = useContext(PictureContext)

   const pictures = pictureData.map((picture, i) => (
      <Image
         key={picture.id}
         img={picture}
         className={getClass(i)}
      />))

   return (
      <main className="photos">
         {pictures}
      </main>
   )
}

export default Photos