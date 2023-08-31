import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import React, { useEffect, useRef } from 'react';
//className={classes.Gallery}
export default function GalleryProduct(){
    const galleryRef = useRef();

  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary 
        .galleryWidget({
          container: galleryRef.current,
          cloudName: 'dckiqiqjl',//'demo',
          aspectRatio: "4:3",
          mediaAssets: [
            { publicId: "Images_Henry_PF/RamFury_yplmue.webp" }, // by default mediaType: "image"
            { publicId: "Images_Henry_PF/RamFuryAtras_n3gdbb"},
            { publicId: "Images_Henry_PF/RamFury3d_lp2rv8" },
            { publicId: "Images_Henry_PF/RamFuryPaquete_durojj" },
            { publicId: "Images_Henry_PF/RamFuryArriba_upvrl1" }
          ],
        })
        .render();
    }
  }, []);

    

    return <div ref={galleryRef} />
}
