import Header from "../components/header/Header"
import PhotoCarrousel from "../components/photoCarrousel/PhotoCarrousel";
import { CARROUSEL_IMAGES,INFO_CARD_CONTAINER_ABOUT_PAGE } from "../data";
import { useEffect, useState } from "react";
import InfoCardContainer from "../components/infoCardContainer/InfoCardContainer";
import TextContainer from "../components/textContainer/TextContainer";
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
            <Header toggleNavBar={false}/>
            <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
            <InfoCardContainer dataSource={INFO_CARD_CONTAINER_ABOUT_PAGE} toggleTitle={false} darkTheme={isDarkTheme}/>
            <TextContainer 
            title={"Nossa Historia: "}
            description1={"A certificação de metodologias que nos auxiliam a lidar com o entendimento das metas propostas não pode mais se dissociar das diretrizes de desenvolvimento para o futuro."}
            description2={"Os desafios atuais não podem mais ser vistos como um problema a ser resolvido, mas sim como uma oportunidade de crescimento e inovação."}
            description3={"Um plano de ação para a melhoria contínua nos obriga à análise e revisão dos métodos utilizados na gestão do nosso negócio."}
            darkTheme={isDarkTheme}
            />
          </>
    );
}