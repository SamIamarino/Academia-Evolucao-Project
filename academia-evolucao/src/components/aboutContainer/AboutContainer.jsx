import './AboutContainer.css';
import AboutCard from '../aboutCard/AboutCard';
import { Carousel } from 'antd';
import { useState, useEffect } from 'react';
import { DoubleRightOutlined } from '@ant-design/icons'



export default function AboutContainer({dataSource,darkTheme}) {

    const desktopContent = (
        <div className='main-about-container'>
            <div className='about-container'>
                {/* colocar um map a partir de um array aq */}
                
                {dataSource.map(item => <AboutCard title={item.title} description={item.description} imageUrl={item.imageUrl}/>)}
            </div>
            <div className='button-container'>
                <a href="/aboutUs" className={darkTheme ? 'more-button-dark-themed': 'more-button'}>Saiba Mais <DoubleRightOutlined /></a>
            </div>
        </div>
    );
    

    const mobileContent = (
        <>
            <Carousel draggable dots={false} arrows>
                {/* colocar um map a partir de um array aq */}
                {dataSource.map(item => <AboutCard title={item.title} description={item.description} imageUrl={item.imageUrl}/>)}   
            </Carousel>
    
            <div className='button-container'>
                <a href="/aboutUs" className={darkTheme ? 'more-button-dark-themed': 'more-button'}>Saiba Mais <DoubleRightOutlined /></a>
            </div>
        </>
    );


    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    useEffect(() => {
        const updateValues = () => {
            setIsMobile(window.innerWidth <= 850);
        };


        console.log('Darktheme no aboutContainer: ' + darkTheme)

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
