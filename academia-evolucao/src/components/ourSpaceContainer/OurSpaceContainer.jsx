import PhotoCarrousel from "../photoCarrousel/PhotoCarrousel";
import { CARROUSEL_IMAGES } from "../../data";
import './OurSpaceContainer.css';
// Provavelmente vai ser melhor mudar o nome desse component mais pra frente. 
//Vai ter uma variavel para receber as infos do data.js aqui.

export default function OurSpaceContainer({title}){
    return(
        <>
            <h1 className="our-space-title" style={{marginBottom: "40px"}} id="nossoEspaco">{title}</h1>
            <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
        </>
    );
}