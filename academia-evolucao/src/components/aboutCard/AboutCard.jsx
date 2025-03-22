import './AboutCard.css';
import peso from '../../assets/fotosCarrousel/peso.png'
import pesoBranco from '../../assets/fotosCarrousel/pesoBranco.png'
import { useState, useEffect } from 'react';


export default function AboutCard({photoUrl, cardTitle, cardText, cardAlt}){
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
        <div className={isDarkTheme ? 'about-card-dark-themed'  : 'about-card'}>
            <div className='about-card-header'>
                <h1 className='about-card-title'>{cardTitle} Equipamentos de qualidade</h1>
                <img src={isDarkTheme ? pesoBranco : peso} alt={cardAlt} className='icon'/>
            </div>

            <div className='about-card-body'>
                <h3>{cardText}  testecaasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaard</h3>
            </div>
        </div>
    );
}