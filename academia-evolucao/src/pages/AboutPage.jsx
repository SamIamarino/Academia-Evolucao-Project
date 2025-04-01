import AboutContainer from "../components/aboutContainer/AboutContainer";
import Header from "../components/header/Header"
import PhotoCarrousel from "../components/photoCarrousel/PhotoCarrousel";
import { CARROUSEL_IMAGES } from "../data";
import { useEffect, useState } from "react";
export default function AboutPage(){

    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
      // precisa fazer o background mudar caso esteja branco dnv
      // só procurar em outro useEffect q ta certo.
      useEffect(() => {
        const updateValues = () => {
    
            const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;    
            setIsDarkTheme(darkTheme);
    
    
            if(isDarkTheme || darkTheme){
                document.body.style.backgroundColor = "#1C1C1C";
            }else{
                document.body.style.backgroundColor = "#white";
            }
    
        };
    
        updateValues();
    
        const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
        themeWatcher.addEventListener("change", updateValues);
    
        return () => {
          themeWatcher.removeEventListener("change", updateValues);
        };
      }, [])

    return(
         <>
                    <Header />
                    <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
                    <AboutContainer />
                    <a href='/'>Voltar para home</a>
                </>
    );
}