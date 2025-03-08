import './AboutCard.css';
import peso from '../../assets/fotosCarrousel/peso.png'
export default function AboutCard({photoUrl, cardTitle, cardText, cardAlt}){
    return(
        <div className='card'>
            <div className='card-header'>
                <h1 className='title'>{cardTitle} Equipamentos de qualidade</h1>
                <img src={peso} alt={cardAlt} className='icon'/>
            </div>

            <div className='card-body'>
                <h3>{cardText}  testecaasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaard</h3>
            </div>
        </div>
    );
}