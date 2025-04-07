import './MobileAppMkt.css';
import celularFoto from '../../assets/celular-app.png'
import calularFotoSemSombra from '../../assets/celular_without-shadow.png'
import { useState, useEffect } from 'react';



const desktopContent = (
        <div className='mobile-app-container'>
            <div className='mobile-app-main-container'>
                <div className='mobile-text-content'>
                    {/* talvez tenha q colocar td em div aqui */}
                    <div>
                        <h1 className='mobile-container-title'>Baixe nosso app tecnofit para auxilio nos treinos.</h1>
                    </div>
                    <div>
                        <p className='mobile-container-paragraph'>Tecnofit alem de te auxiliar nos treinos é a principal rede de comunicação com os alunos</p>
                    </div>
                    <div>
                        <ul className='mobile-item-list'>
                            <li>Informações</li>
                            <li>Horários</li>
                            <li>Reserva de Aulas</li>
                            <li>Atualizações</li>
                            <li>Eventos</li>
                        </ul>
                    </div>
                    
                </div>
                    <img src={celularFoto} alt="Imagem Celular" className='smartphone-img'/>
            </div>
        </div>
        );

const mobileContent = (
    <div className='mobile-content-container'>
        <img src={calularFotoSemSombra} alt="Imagem Celular" className='smartphone-img'/>
        <ul className='mobile-item-list'>
            <li>Informações</li>
            <li>Horários</li>
            <li>Reserva de Aulas</li>
            <li>Atualizações</li>
            <li>Eventos</li>
        </ul>
    </div>
);


export default function MobileAppMkt(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

    useEffect(() => {
        const updateValues = () => {
            setIsMobile(window.innerWidth <= 750);
        };

        window.addEventListener("resize", updateValues);
        updateValues();

        return () => {
            window.removeEventListener("resize", updateValues);
        };
    }, []); 


    return(
        <>
            {isMobile ? mobileContent : desktopContent}
        </>
    );
}