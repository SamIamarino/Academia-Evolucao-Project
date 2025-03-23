import './PlanoCard.css'
import fotoExercicio from '../../assets/carafazendoexercicio.png'
import { useState,useEffect } from 'react';
// Coloar photoUrl como prop no plano card
export default function PlanoCard ({plano,description1,description2}){

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
                <img src={fotoExercicio} alt="Imagem plano" className='plano-img'/>
                <div className={isDarkTheme ? 'plano-card-header-dark-themed':'plano-card-header' }>
                    <h1>{plano} Plano semestral</h1>
                </div>

            </div>
            <div className={isDarkTheme ? 'plano-card-body-dark-themed' : 'plano-card-body'}>
                <p>{description1}testeasddddddddddddddddddddddddddddddddddddddddddddd</p>
                <hr />
                <p>{description2}testeasdadasdasdsadddddddddddddddddddddddddddddddddd</p>
            </div>
        </div>
    );
}