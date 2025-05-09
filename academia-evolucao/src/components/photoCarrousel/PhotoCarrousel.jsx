import { React } from "react";
import { Carousel } from 'antd';
import { useState, useEffect } from "react";
import './PhotoCarrousel.css'

const carouselStyleDesktop = {
  width: '100%',       // Full width
  height: '750px',   // Increase the height
};


const carouselStyleMobile = {
  width: '100%',       // Full width
  height: '300px',   // Increase the height
};


// Precisa arrumar o useffect q ta com o bug de ter que dar refresh na página pra mudar estilo do carrousel. 
// Só transformar em estado com a verificação certa.

export default function PhotoCarrousel({photoArray,mobile}){   

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
      <div style={mobile ? carouselStyleMobile : carouselStyleDesktop} className="carrousel">
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