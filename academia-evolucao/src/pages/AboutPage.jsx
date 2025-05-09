import Header from "../components/header/Header"
import PhotoCarrousel from "../components/photoCarrousel/PhotoCarrousel";
import { CARROUSEL_IMAGES,INFO_CARD_CONTAINER_ABOUT_PAGE } from "../data";
import { useEffect, useState } from "react";
import InfoCardContainer from "../components/infoCardContainer/InfoCardContainer";
import TextContainer from "../components/textContainer/TextContainer";
import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

export default function AboutPage(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    useEffect(() => {
      const updateValues = () => {
        const mobile = window.innerWidth <= 750;
        const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
        setIsMobile(mobile);
        setIsDarkTheme(darkTheme);
    
        document.body.style.backgroundColor = darkTheme ? "#1C1C1C" : "#F1F1F1";
      };
    
      updateValues();
    
      const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
      themeWatcher.addEventListener("change", updateValues);
      window.addEventListener("resize", updateValues);
    
      return () => {
        themeWatcher.removeEventListener("change", updateValues);
        window.removeEventListener("resize", updateValues);
      };
    }, []);

    return(
         <>
            <Header toggleNavBar={false}/>
            <PhotoCarrousel photoArray={CARROUSEL_IMAGES} mobile={isMobile}/>
            <InfoCardContainer dataSource={INFO_CARD_CONTAINER_ABOUT_PAGE} toggleTitle={false} darkTheme={isDarkTheme} mobile={isMobile}/>
            <TextContainer 
            title={"Nossa Historia: "}
            description1={"A certificação de metodologias que nos auxiliam a lidar com o entendimento das metas propostas não pode mais se dissociar das diretrizes de desenvolvimento para o futuro."}
            description2={"Os desafios atuais não podem mais ser vistos como um problema a ser resolvido, mas sim como uma oportunidade de crescimento e inovação."}
            description3={"Um plano de ação para a melhoria contínua nos obriga à análise e revisão dos métodos utilizados na gestão do nosso negócio."}
            darkTheme={isDarkTheme}
            />
            <FloatButton  href="https://wa.me/message/JIYIDMVOUKSKJ1" icon={<WhatsAppOutlined />} style={{ backgroundColor: '#25D366'}} rowClassName={() => 'dark-row'}/>
          </>
    );
}