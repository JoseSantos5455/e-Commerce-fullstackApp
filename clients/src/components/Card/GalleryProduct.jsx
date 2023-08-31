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
            { publicId: "/samples/woman-on-a-football-field.jpg" }, // by default mediaType: "image"
   
            //{tag: "", transformation: { crop: "fill" } },
          ],
          // carouselStyle: "indicators",
          // carouselLocation: "bottom",
        })
        .render();
    }
  }, []);

    

    return <div ref={galleryRef} />
}
