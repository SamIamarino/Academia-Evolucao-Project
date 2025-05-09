import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TreineAquiContainer from './components/TreineAquiContainer/TreineAquiContainer.jsx';
import PhotoCarrousel from './components/photoCarrousel/PhotoCarrousel';
import { PLANO_CONTENT,ABOUT_CARD_CONTENT,INFO_CARD_CONTAINER_MAIN_PAGE, CARROUSEL_OUR_TEAM, CARROUSEL_IMAGES } from './data.js';
import { useEffect,useState } from 'react';
import AboutContainer from './components/aboutContainer/AboutContainer.jsx';
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import CarrouselContainer from './components/ourSpaceContainer/CarrouselContainer.jsx';
import PlanosContainer from './components/planosContainer/PlanosContainer.jsx';
import MobileAppMkt from './components/mobileAppMkt/MobileAppMkt.jsx';
import InfoCard from './components/infoCard/InfoCard.jsx';
import InfoCardContainer from './components/infoCardContainer/InfoCardContainer.jsx';
const App = () => {



  // const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  //    useEffect(() => {
  //           const updateValues = () => {

  //               const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;    
  //               setIsDarkTheme(darkTheme);

  //           };
    
  //           updateValues(); // Executa na inicialização
    
  //           const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
  //           themeWatcher.addEventListener("change", updateValues);
    
  //           return () => {
  //               window.removeEventListener("resize", updateValues);
  //               themeWatcher.removeEventListener("change", updateValues);
  //           };
  //       }, []);


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
            document.body.style.backgroundColor = "#F1F1F1";
        }

    };

    updateValues();

    const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
    themeWatcher.addEventListener("change", updateValues);

    return () => {
      themeWatcher.removeEventListener("change", updateValues);
    };
  }, [])
  
  return (
    <>
      <Header toggleNavBar={true}/>
      <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
      <AboutContainer darkTheme={isDarkTheme} dataSource={ABOUT_CARD_CONTENT}/>
      {/* RENOMEAR ESSE CONTAINER -- CAROUSEL CONTAINER ALGO ASSIM */}
      <CarrouselContainer title={"Nosso Espaço: "}/>
      <PlanosContainer dataSource={PLANO_CONTENT}/>
      <CarrouselContainer title={"ESTAMOS PREPARADOS PARA TE AUXILIAR: "}/>
      <MobileAppMkt darkTheme={isDarkTheme}/>
      <TreineAquiContainer darkTheme={isDarkTheme}/>
      <InfoCardContainer dataSource={INFO_CARD_CONTAINER_MAIN_PAGE} darkTheme={isDarkTheme} title={"Horarios: "} toggleTitle={true}/>
      {/* Resolver dps problema do whats */}
      <FloatButton  href="https://wa.me/message/JIYIDMVOUKSKJ1" icon={<WhatsAppOutlined />} style={{ backgroundColor: '#25D366'}} rowClassName={() => 'dark-row'}/>
      <Footer />
    </>
  );
};
export default App; 