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

const mobileContent = 

    <Carousel draggable dots={false} arrows>
        <div className='center'>
            <AboutCard />   
        </div>
        <div className='center'>
            <AboutCard />   
        </div>
        <div className='center'>
            <AboutCard />   
        </div>
    </Carousel>



export default function AboutContainer(){

    const [content, setContent] = useState(window.innerWidth <= 750 ? mobileContent : desktopContent);
    
        useEffect(() => {
            
            const handleResize = () => {
                setContent(window.innerWidth <= 750 ? mobileContent : desktopContent);
            };
    
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);


    return(
        <div className='about-container'>

            <h1 className='about-title'>POR QUE NOS ESCOLHER: </h1>
            {content}
        </div>
    );

}