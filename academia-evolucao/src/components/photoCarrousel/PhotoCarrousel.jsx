import { React } from "react";
import { Carousel } from 'antd';
import { useState, useEffect } from "react";
import './PhotoCarrousel.css'

const carouselStyleDesktop = {
  width: '100%',       // Full width
  height: '600px',   // Increase the height
};

// const imageStyle = {
//   width: '100%',
//   height: '800px',
//   objectFit: 'cover', // E;nsures images scale properly
// };

const carouselStyleMobile = {
  width: '100%',       // Full width
  height: '300px',   // Increase the height
};


export default function PhotoCarrousel({photoArray}){   

  const isMobile = window.innerWidth <= 750 ? true : false;

  //É preciso que a DOM renderize novamente para ser trocada o icone.
      const [carouselStyle, setCarouselStyle] = useState( isMobile ? carouselStyleMobile : carouselStyleDesktop);
  
      useEffect(() => {
          
          const handleResize = () => {
            setCarouselStyle(isMobile ? carouselStyleMobile : carouselStyleDesktop);
          };
  
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
      }, [isMobile]);

  // Passar array como prop e dar um map dentro do carrousel.

    return(
      <div style={carouselStyle} className="carrousel">
        <Carousel dotPosition='bottom' draggable dots={isMobile ? false : true}>
          {
            photoArray.map( (item) => 
            <div>
              <img src={item.imageUrl} alt={item.description} className="imageStyle"/>
            </div>
            )
          }
          </Carousel>
      </div>
      
    );

}