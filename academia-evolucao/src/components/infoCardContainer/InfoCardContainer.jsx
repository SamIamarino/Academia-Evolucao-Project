import './InfoCardContainer.css';
import InfoCard from '../infoCard/InfoCard.jsx';
import { Carousel, Divider } from 'antd';
import { useState , useEffect} from 'react';
export default function InfoCardContainer({dataSource, darkTheme, title, toggleTitle}){

    const desktopContent = (
        <div className='main-info-card-container'>
            <div className='info-card-container'>
                {dataSource.map( item => <InfoCard title={item.title} description={item.description} darkTheme={darkTheme}/>)}
            </div>
        </div>
    );

    const mobileContent = (
        <Carousel draggable dots={false} arrows>
            {dataSource.map( item => <InfoCard title={item.title} description={item.description} darkTheme={darkTheme}/>)}
        </Carousel>
    );

    const [isMobile,setIsMobile] = useState(window.innerWidth<= 850);

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

    return(
        <>
            { toggleTitle ? <h1 className={darkTheme ? 'info-card-container-title white-font': 'info-card-container-title' } id='horarios'>{title}</h1> : undefined}
            {isMobile ? mobileContent : desktopContent}
        </>
    );
}