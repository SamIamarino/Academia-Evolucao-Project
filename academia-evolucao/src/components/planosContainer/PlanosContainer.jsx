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

      const [content, setContent] = useState(isMobile ? mobileContent : desktopContent);
        
            useEffect(() => {
                
                const handleResize = () => {
                    setContent(isMobile ? mobileContent : desktopContent);
                };
        
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
            }, [content]);


    return(
        <div className="plano-container">
            <h1 className='plano-title'>NOSSOS PLANOS: </h1>
            {content}
        </div>
    );
}