import './AboutCard.css';
import peso from '../../assets/fotosCarrousel/peso.png'
export default function AboutCard({photoUrl, cardTitle, cardText, cardAlt}){
    return(
        <div className='about-card'>
            <div className='about-card-header'>
                <h1 className='about-card-title'>{cardTitle} Equipamentos de qualidade</h1>
                <img src={peso} alt={cardAlt} className='icon'/>
            </div>

            <div className='about-card-body'>
                <h3>{cardText}  testecaasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaard</h3>
            </div>
        </div>
    );
}