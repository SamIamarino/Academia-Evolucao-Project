import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import TreineAquiContainer from '../components/TreineAquiContainer/TreineAquiContainer.jsx';
import PhotoCarrousel from '../components/photoCarrousel/PhotoCarrousel.jsx';
import AboutContainer from '../components/aboutContainer/AboutContainer.jsx';
import CarrouselContainer from '../components/ourSpaceContainer/CarrouselContainer.jsx';
import PlanosContainer from '../components/planosContainer/PlanosContainer.jsx';
import MobileAppMkt from '../components/mobileAppMkt/MobileAppMkt.jsx';
import InfoCardContainer from '../components/infoCardContainer/InfoCardContainer.jsx';

import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

import {
  PLANO_CONTENT,
  ABOUT_CARD_CONTENT,
  ABOUT_CARD_CONTENT_DARK_THEME,
  INFO_CARD_CONTAINER_MAIN_PAGE,
  CARROUSEL_OUR_TEAM,
  CARROUSEL_IMAGES,
  CARROUSEL_OUR_SPACE_FOTOS
} from '../data.js';

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const updateValues = () => {
      const mobile = window.innerWidth <= 850;
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

  return (
    <>
      <Header toggleNavBar={true} />

      <PhotoCarrousel photoArray={CARROUSEL_IMAGES} mobile={isMobile} />

      <AboutContainer 
        darkTheme={isDarkTheme} 
        dataSource={isDarkTheme ? ABOUT_CARD_CONTENT_DARK_THEME : ABOUT_CARD_CONTENT} 
        mobile={isMobile} 
      />

      <CarrouselContainer 
        title="Nosso Espaço:"  
        mobile={isMobile}
        dataSource={CARROUSEL_OUR_SPACE_FOTOS}
        darkTheme={isDarkTheme}
        scrollID={"nossoEspaco"}
      />

      <PlanosContainer 
        dataSource={PLANO_CONTENT} 
        mobile={isMobile} 
        darkTheme={isDarkTheme}
      />

      <CarrouselContainer 
        title="ESTAMOS PREPARADOS PARA TE AUXILIAR:" 
        mobile={isMobile}
        dataSource={CARROUSEL_OUR_TEAM}
        darkTheme={isDarkTheme}
        scrollID={"nossaEquipe"}
      />

      <MobileAppMkt darkTheme={isDarkTheme} mobile={isMobile}/>

      <TreineAquiContainer darkTheme={isDarkTheme} />

      <InfoCardContainer 
        dataSource={INFO_CARD_CONTAINER_MAIN_PAGE} 
        darkTheme={isDarkTheme} 
        title="Horarios:" 
        toggleTitle={true} 
        mobile={isMobile}
        scrollID={"horarios"}
      />

      {/* Resolver depois problema do WhatsApp */}
      <FloatButton 
        href="https://wa.me/message/JIYIDMVOUKSKJ1" 
        icon={<WhatsAppOutlined />} 
        style={{ backgroundColor: '#25D366' }} 
        rowClassName={() => 'dark-row'} 
      />

      <Footer />
    </>
  );
};

export default MainPage;
