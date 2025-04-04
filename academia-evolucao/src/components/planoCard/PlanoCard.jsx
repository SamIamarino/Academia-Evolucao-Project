import './PlanoCard.css'
import fotoExercicio from '../../assets/carafazendoexercicio.png'
import { useState,useEffect } from 'react';
import WhatsAppButton from '../whatsappButton/WhatsappButton';
// Coloar photoUrl como prop no plano card
export default function PlanoCard ({plano,description,imagemPlano}){

    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

    useEffect(() => {
           const updateValues = () => {

               const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;    
               setIsDarkTheme(darkTheme);

           };
   
           updateValues(); // Executa na inicialização
   
           const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
           themeWatcher.addEventListener("change", updateValues);
   
           return () => {
               window.removeEventListener("resize", updateValues);
               themeWatcher.removeEventListener("change", updateValues);
           };
       }, []);

    return(
        <div className="plano-card" >
            <div>
                <img src={imagemPlano} alt="Imagem plano" className='plano-img'/>
                <div className={isDarkTheme ? 'plano-card-header-dark-themed':'plano-card-header' }>
                    <h1>{plano}</h1>
                </div>

            </div>
            <div className={isDarkTheme ? 'plano-card-body-dark-themed' : 'plano-card-body'}>
                <p>{description}</p>
                <hr />
                <WhatsAppButton/>
            </div>
        </div>
    );
}