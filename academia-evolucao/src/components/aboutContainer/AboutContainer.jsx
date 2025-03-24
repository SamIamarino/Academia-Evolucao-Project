import './AboutContainer.css';
import AboutCard from '../aboutCard/AboutCard';
import { Carousel } from 'antd';
import { useState, useEffect } from 'react';

const desktopContent = (
    <div className='about-card-container'>
        <AboutCard />
        <AboutCard />
        <AboutCard />
    </div>
);

const mobileContent = (
    <Carousel draggable dots={false} arrows>
        <AboutCard />   
        <AboutCard />   
        <AboutCard />   
    </Carousel>
);

export default function AboutContainer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

    useEffect(() => {
        const updateValues = () => {
            setIsMobile(window.innerWidth <= 750);
        };

        window.addEventListener("resize", updateValues);
        return () => window.removeEventListener("resize", updateValues);
    }, []);

    return (
        <div className='about-container'>
            {isMobile ? mobileContent : desktopContent}
        </div>
    );
}
