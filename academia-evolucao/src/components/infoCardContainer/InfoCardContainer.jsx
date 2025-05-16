import './InfoCardContainer.css';
import InfoCard from '../infoCard/InfoCard.jsx';
import { Carousel, Divider } from 'antd';
import { useState , useEffect} from 'react';
export default function InfoCardContainer({dataSource, darkTheme, title, toggleTitle, mobile}){

    const desktopContent = (
        <div className='main-info-card-container'>
            <div className='info-card-container'>
                {dataSource.map( item => <InfoCard title={item.title} description={item.description} darkTheme={darkTheme}/>)}
            </div>
        </div>
    );

    const mobileContent = (
        <div className='main-info-card-container'>
            <Carousel draggable dots={false} arrows>
                {dataSource.map( item => <InfoCard title={item.title} description={item.description} darkTheme={darkTheme}/>)}
            </Carousel>
        </div>
    );

    return(
        <>
            {toggleTitle ? <h1 className={darkTheme ? 'info-card-container-title white-font': 'info-card-container-title' } id='horarios'>{title}</h1> : undefined}
            {mobile ? mobileContent : desktopContent}
        </>
    );
}