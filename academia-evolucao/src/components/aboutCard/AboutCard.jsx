import './AboutCard.css';
import { useState, useEffect } from 'react';


export default function AboutCard({imageUrl, title, description}){
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
                <h1 className='about-card-title'>{title}</h1>
                <img src={imageUrl} alt='teste' className='icon'/>
            </div>

            <div className='about-card-body'>
                <h3 className='about-card-description league-spartan-font'>{description}</h3>
            </div>
        </div>
    );
}