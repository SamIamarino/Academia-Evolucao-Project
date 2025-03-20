import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PhotoCarrousel from './components/photoCarrousel/PhotoCarrousel';
import {CARROUSEL_IMAGES} from './data.js'
import { useEffect } from 'react';
import AboutContainer from './components/aboutContainer/AboutContainer.jsx';
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
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
      <FloatButton  href='https://wa.me/5538602440' icon={<WhatsAppOutlined />} style={{ backgroundColor: '#25D366'}}/>

      <Footer />
    </>
  );
};
export default App; 