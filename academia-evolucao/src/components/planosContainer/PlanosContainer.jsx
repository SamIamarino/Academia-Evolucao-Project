import './PlanosContainer.css';
import PlanoCard from '../planoCard/PlanoCard.jsx';
import { useState,useEffect } from 'react';
import { Carousel } from 'antd';

const desktopContent = 
<div className='plano-card-container'>
    <PlanoCard/>
    <PlanoCard/>
    <PlanoCard/>
</div>

const mobileContent = 
<Carousel draggable dots={false} arrows>
    <PlanoCard/>
    <PlanoCard/>
    <PlanoCard/> 
</Carousel>


const isMobile = window.innerWidth <= 750 ? true : false;

export default function PlanosContainer(){
    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const [content, setContent] = useState(isMobile ? mobileContent : desktopContent);
        
            // Esse codigo funciona do msm jeito com menos coisa.
            // pelo amor de Deus arruma dps q isso aqui ta horrivel mas ta funcionando e
            useEffect(() => {
  
                const updateValues = () => {
                    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;    
                    setIsDarkTheme(darkTheme);
                    setContent(isMobile ? mobileContent : desktopContent);
                };

                const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
                themeWatcher.addEventListener("change", updateValues);

                window.addEventListener("resize", updateValues);
                return () => {
                    window.removeEventListener("resize", updateValues);
                    themeWatcher.removeEventListener("change", updateValues);
                }
            }, [content]);


    return(
        <div className="plano-container" id="nossosPlanos">
            <h1 className={  isDarkTheme ? 'plano-title-dark-themed' : 'plano-title'}>NOSSOS PLANOS: </h1>
            {content}
        </div>
    );
}