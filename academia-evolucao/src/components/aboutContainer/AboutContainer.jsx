import './AboutContainer.css';
import AboutCard from '../aboutCard/AboutCard';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { DoubleRightOutlined } from '@ant-design/icons'



export default function AboutContainer({dataSource,darkTheme,mobile}) {

    const desktopContent = (
        <div className='main-about-container'>
            <div className='about-container'>
                {/* colocar um map a partir de um array aq */}
                
                {dataSource.map(item => <AboutCard title={item.title} description={item.description} imageUrl={item.imageUrl}/>)}
            </div>
            <div className='button-container'>

                <Link to="/aboutUs" className={darkTheme ? 'more-button-dark-themed' : 'more-button'}>
                    Saiba Mais <DoubleRightOutlined />
                </Link>

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
                <Link to="/aboutUs" className={darkTheme ? 'more-button-dark-themed' : 'more-button'}>
                        Saiba Mais <DoubleRightOutlined />
                </Link>
            </div>
        </>
    );

    return (
        <div className='about-container'>
            {mobile ? mobileContent : desktopContent}
        </div>
    );
}
