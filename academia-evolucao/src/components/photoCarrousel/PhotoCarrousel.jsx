import { React } from "react";
import { Carousel } from 'antd';
import './PhotoCarrousel.css'

const carouselStyle = {
  width: '100%',       // Full width
  height: '500px',   // Increase the height
};

const imageStyle = {
  width: '100%',
  height: '500px',
  objectFit: 'cover', // E;nsures images scale properly
};

export default function PhotoCarrousel({photoArray}){   

  // Passar array como prop e dar um map dentro do carrousel.

    return(
      <div style={carouselStyle} className="carrousel">
        <Carousel dotPosition='bottom' autoplay autoplaySpeed={1500} draggable>
          {
            photoArray.map( (item) => 
            <div>
              <img src={item.imageUrl} alt={item.description} style={imageStyle}/>
            </div>
            )
          }
          </Carousel>
      </div>
      
    );

}