import './PlanosContainer.css';
import PlanoCard from '../planoCard/PlanoCard.jsx';
import { useState,useEffect } from 'react';
import { Carousel } from 'antd';
import { PLANO_CONTENT } from '../../data.js';
const desktopContent = 
<div className='plano-card-container'>
    {PLANO_CONTENT.map( item => <PlanoCard plano={item.plano} description={item.description} imagemPlano={item.imagemPlano}/>)}
</div>

const mobileContent = 
<Carousel draggable dots={false} arrows>
{PLANO_CONTENT.map( item => <PlanoCard plano={item.plano} description={item.description} imagemPlano={item.imagemPlano}/>)} 
</Carousel>

export default function PlanosContainer(){
    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const [content, setContent] = useState(window.innerWidth <= 750 ? true : false);
        
            // Esse codigo funciona do msm jeito com menos coisa.
            // pelo amor de Deus arruma dps q isso aqui ta horrivel mas ta funcionando e
            useEffect(() => {
  
                const updateValues = () => {
                    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;    
                    setIsDarkTheme(darkTheme);
                    setContent(window.innerWidth <= 750);
                };

                const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
                themeWatcher.addEventListener("change", updateValues);
                window.addEventListener("resize", updateValues);

                updateValues();

                return () => {
                    window.removeEventListener("resize", updateValues);
                    themeWatcher.removeEventListener("change", updateValues);
                }
            }, [content]);


    return(
        <div className="plano-container" id="nossosPlanos">
            <h1 className={  isDarkTheme ? 'plano-title-dark-themed' : 'plano-title'}>NOSSOS PLANOS: </h1>
            { content ?  mobileContent: desktopContent }
        </div>
    );
}