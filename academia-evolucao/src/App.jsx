import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PhotoCarrousel from './components/photoCarrousel/PhotoCarrousel';
import {CARROUSEL_IMAGES} from './data.js'
import { useEffect } from 'react';
import AboutContainer from './components/aboutContainer/AboutContainer.jsx';
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import OurSpaceContainer from './components/ourSpaceContainer/OurSpaceContainer.jsx';
import PlanosContainer from './components/planosContainer/PlanosContainer.jsx';
const App = () => {

  // useEffect(() => {
  //   console.log('teste')
  //   Aqui colocar matchMedia para verificar qual tema esta o dispositivo
  // })
  
  return (
    <>
      <Header />
      <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
      <AboutContainer />
      <OurSpaceContainer title={"Nosso Espaço: "}/>
      <FloatButton  href='https://wa.me/551138602440' icon={<WhatsAppOutlined />} style={{ backgroundColor: '#25D366'}}/>
      <PlanosContainer />
      <Footer />
    </>
  );
};
export default App; 