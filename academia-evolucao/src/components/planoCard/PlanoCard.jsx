import './PlanoCard.css'
import fotoExercicio from '../../assets/carafazendoexercicio.png'
export default function PlanoCard ({plano,description1,description2}){

    return(
        <div className="plano-card">
            <div>
                <img src={fotoExercicio} alt="Imagem plano" className='plano-img'/>
                <div className="plano-card-header">
                    <h1>{plano} Plano semestral</h1>
                </div>

            </div>
            <div className='plano-card-body'>
                <p>{description1}testeasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                <hr />
                <p>{description2}testeasdadasdasdsadddddddddddddddddddddddddddddddddd</p>
            </div>
        </div>
    );
}