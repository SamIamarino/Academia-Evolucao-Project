import { Carousel } from 'antd';
import './PhotoCarrousel.css'

const carouselStyleDesktop = {
  width: '100%',       // Full width
  height: '750px',   // Increase the height
  // Ensure images cover the area
  objectFit: 'cover',
  objectPosition: 'center',
};


const carouselStyleMobile = {
  width: '100%',       // Full width
  height: '300px',   // Increase the height
};


// Precisa arrumar o useffect q ta com o bug de ter que dar refresh na página pra mudar estilo do carrousel. 
// Só transformar em estado com a verificação certa.

export default function PhotoCarrousel({photoArray,mobile}){   

  const isMobile = window.innerWidth <= 750 ? true : false;


  // Passar array como prop e dar um map dentro do carrousel.

    return(
      <div style={mobile ? carouselStyleMobile : carouselStyleDesktop} className="carrousel">
        <Carousel dotPosition='bottom' draggable dots={isMobile ? false : true} arrows={isMobile ? true : false}>
          {
            photoArray.map((item) => 
            <div>
              <img src={item.imageUrl} alt={item.description} className="imageStyle"/>
            </div>
            )
          }
          </Carousel>
      </div>
      
    );

}