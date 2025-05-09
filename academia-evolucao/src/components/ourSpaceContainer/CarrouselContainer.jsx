import PhotoCarrousel from "../photoCarrousel/PhotoCarrousel";
import { CARROUSEL_OUR_TEAM } from "../../data";
import { useState, useEffect } from "react";
import './OurSpaceContainer.css';
// Provavelmente vai ser melhor mudar o nome desse component mais pra frente. 
//Vai ter uma variavel para receber as infos do data.js aqui.

export default function CarrouselContainer({title, dataSource,mobile,darkTheme}){

    return(
        <>
            <h1 className={darkTheme ? 'our-space-title-dark-themed' : 'our-space-title'} style={{marginBottom: "40px"}} id="nossoEspaco">{title}</h1>
            <PhotoCarrousel photoArray={dataSource} mobile={mobile}/>
        </>
    );
}