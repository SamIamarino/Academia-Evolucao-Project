import './AboutContainer.css';
import AboutCard from '../aboutCard/AboutCard';
import { Carousel } from 'antd';
import { useState, useEffect } from 'react';
// Vamos usar depois
import { ABOUT_CARD_CONTENT } from '../../data';



const desktopContent = 
<div className='about-card-container'>
    <AboutCard />
    <AboutCard />
    <AboutCard />
</div>;

// dar um array.map com os dados do array.
const mobileContent = 
    <Carousel draggable dots={false} arrows style={{height:"50px"}}>
            <AboutCard />   
            <AboutCard />   
            <AboutCard />   
    </Carousel>


const isMobile = window.innerWidth <= 750 ? true : false;


export default function AboutContainer(){

    const [content, setContent] = useState(isMobile ? mobileContent : desktopContent);
    
        useEffect(() => {
            
            const handleResize = () => {
                setContent(isMobile ? mobileContent : desktopContent);
            };
    
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, [content]);


    return(
        <div className='about-container'>

            {/* Esse H1 nao eh para existir */}
            <h1 className='about-title'>POR QUE NOS ESCOLHER: </h1>
            {content}
        </div>
    );

}