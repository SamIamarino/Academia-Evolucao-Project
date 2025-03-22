import PhotoCarrousel from "../photoCarrousel/PhotoCarrousel";
import { CARROUSEL_IMAGES } from "../../data";
import { useState, useEffect } from "react";
import './OurSpaceContainer.css';
// Provavelmente vai ser melhor mudar o nome desse component mais pra frente. 
//Vai ter uma variavel para receber as infos do data.js aqui.

export default function OurSpaceContainer({title}){

    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

    useEffect(() => {
           const updateValues = () => {

               const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;    
               setIsDarkTheme(darkTheme);

           };
   
           updateValues(); // Executa na inicialização
   
           const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
           themeWatcher.addEventListener("change", updateValues);
   
           return () => {
               window.removeEventListener("resize", updateValues);
               themeWatcher.removeEventListener("change", updateValues);
           };
       }, []);

    return(
        <>
            <h1 className={isDarkTheme ? 'our-space-title-dark-themed' : 'our-space-title'} style={{marginBottom: "40px"}} id="nossoEspaco">{title}</h1>
            <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
        </>
    );
}