import './AboutContainer.css';
import AboutCard from '../aboutCard/AboutCard';
import { Carousel } from 'antd';
import { useState, useEffect } from 'react';
import { ArrowRightOutlined, DoubleRightOutlined } from '@ant-design/icons'
const desktopContent = (
    <div className='main-about-container'>
        <div className='about-container'>
            <AboutCard />
            <AboutCard />
            <AboutCard />
            
        </div>
        <div className='button-container'>
            <a href="/aboutUs" className='more-button'>Saiba Mais <DoubleRightOutlined /></a>
        </div>
    </div>
);

const mobileContent = (
    <>
        <Carousel draggable dots={false} arrows>
            <AboutCard />   
            <AboutCard />   
            <AboutCard />   
        </Carousel>

        <div className='button-container'>
            <a href="/aboutUs" className='more-button'>Saiba Mais <DoubleRightOutlined /></a>
        </div>
    </>
);

export default function AboutContainer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

    useEffect(() => {
        const updateValues = () => {
            setIsMobile(window.innerWidth <= 750);
        };

        window.addEventListener("resize", updateValues);
        updateValues(); // Ensure it updates immediately when the effect runs

        return () => {
            window.removeEventListener("resize", updateValues);
        };
    }, []); // Run only once on mount

    console.log(isMobile);


    return (
        <div className='about-container'>
            {isMobile ? mobileContent : desktopContent}
        </div>
    );
}
