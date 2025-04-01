import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PhotoCarrousel from './components/photoCarrousel/PhotoCarrousel';
import {CARROUSEL_IMAGES} from './data.js'
import { useEffect,useState } from 'react';
import AboutContainer from './components/aboutContainer/AboutContainer.jsx';
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import OurSpaceContainer from './components/ourSpaceContainer/OurSpaceContainer.jsx';
import PlanosContainer from './components/planosContainer/PlanosContainer.jsx';


const App = () => {


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
  
  return (
    <>
      <Header />
      <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
      <AboutContainer />
      {/* RENOMEAR ESSE CONTAINER -- CAROUSEL CONTAINER ALGO ASSIM */}
      <OurSpaceContainer title={"Nosso Espaço: "}/>
      <FloatButton  href='https://wa.me/551138602440' icon={<WhatsAppOutlined />} style={{ backgroundColor: '#25D366'}}/>
      <PlanosContainer />
      <OurSpaceContainer title={"ESTAMOS PREPARADOS PARA TE AUXILIAR: "}/>
      <Footer />
    </>
  );
};
export default App; 