import './PlanosContainer.css';
import PlanoCard from '../planoCard/PlanoCard.jsx';
import { Carousel } from 'antd';

export default function PlanosContainer({dataSource, mobile, darkTheme}){

        const desktopContent = 
            <div className='plano-card-container'>
                {dataSource.map( item => <PlanoCard plano={item.plano} description={item.description} imagemPlano={item.imagemPlano}/>)}
            </div>

        const mobileContent = 
            <Carousel draggable dots={false} arrows>
                {dataSource.map( item => <PlanoCard plano={item.plano} description={item.description} imagemPlano={item.imagemPlano}/>)} 
            </Carousel>



    return(
        <div className="plano-container" id="nossosPlanos">
            <h1 className={darkTheme ? 'plano-title-dark-themed' : 'plano-title'}>NOSSOS PLANOS: </h1>
            { mobile ?  mobileContent : desktopContent }
        </div>
    );
}