import PhotoCarrousel from "../photoCarrousel/PhotoCarrousel";
import './OurSpaceContainer.css';
import { Element } from "react-scroll";
// Provavelmente vai ser melhor mudar o nome desse component mais pra frente. 
//Vai ter uma variavel para receber as infos do data.js aqui.

export default function CarrouselContainer({title, dataSource,mobile,darkTheme,scrollID}){

    return(
        <Element name={scrollID}>
            <h1 className={darkTheme ? 'our-space-title-dark-themed' : 'our-space-title'} style={{marginBottom: "40px"}}>{title}</h1>
            <PhotoCarrousel photoArray={dataSource} mobile={mobile}/>
        </Element>
    );
}