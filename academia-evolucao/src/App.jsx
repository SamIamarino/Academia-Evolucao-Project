import React from 'react';
import Header from './components/header/Header';
import AboutCard from './components/aboutCard/AboutCard';
import PlanoCard from './components/planoCard/PlanoCard';
import Footer from './components/footer/Footer';
import PhotoCarrousel from './components/photoCarrousel/PhotoCarrousel';
import {CARROUSEL_IMAGES} from './data.js'
import { useEffect } from 'react';
import AboutContainer from './components/aboutContainer/AboutContainer.jsx';
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
      {/* <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard /> */}

      <Footer />
    </>
  );
};
export default App;