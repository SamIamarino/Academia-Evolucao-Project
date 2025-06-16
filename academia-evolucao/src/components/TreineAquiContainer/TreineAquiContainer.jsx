import './TreineAquiContainer.css';
import WhatsAppButton from '../whatsappButton/WhatsappButton';
export default function TreineAquiContainer({darkTheme}){
    return(
        <div className='treine-aqui-container'>
            <div className='treine-aqui-content'>
                {/* <h1 className='treine-aqui-title'>Agende seu treino conosco!!</h1> */}
                {/* DarkTheme True aqui sempre pois no tema claro ele n pode mudar de classe */}
                <WhatsAppButton darkTheme={true}>Fale com a gente</WhatsAppButton>
            </div>
        </div>
    );
}