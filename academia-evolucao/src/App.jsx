import React from 'react';
import Header from './components/header/Header';
import AboutCard from './components/aboutCard/AboutCard';
import PlanoCard from './components/planoCard/PlanoCard';
import Footer from './components/footer/Footer';
import PhotoCarrousel from './components/photoCarrousel/PhotoCarrousel';
import {CARROUSEL_IMAGES} from './data.js'

const App = () => {
  
  return (
    <>
      <Header />
      <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
      <AboutCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />
      <PlanoCard />

      <Footer />
    </>
  );
};
export default App;