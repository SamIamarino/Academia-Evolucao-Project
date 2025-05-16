import './MobileAppMkt.css';
import celularFoto from '../../assets/celular-app.png'
import calularFotoSemSombra from '../../assets/celular_without-shadow.png'

export default function MobileAppMkt({darkTheme,mobile}){

    const desktopContent = (
        <div className='mobile-app-container'>
            <div className={darkTheme ? 'mobile-app-main-container-dark-themed' : 'mobile-app-main-container'}>  
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
                            <li className={darkTheme ? 'list-item-dark-themed' : 'list-item'}>Informações</li>
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
            <h1 className={darkTheme ? 'mkt-app-title-dark-themed' : 'mkt-app-title'}>Utilize Tecnofit nos seus treinos: </h1>
            <img src={calularFotoSemSombra} alt="Imagem Celular" className='smartphone-img'/>
            <ul className='mobile-item-list'>
                <li className={darkTheme ? 'list-item-dark-themed' : 'list-item'}>Informações</li>
                <li className={darkTheme ? 'list-item-dark-themed' : 'list-item'}>Horários</li>
                <li className={darkTheme ? 'list-item-dark-themed' : 'list-item'}>Reserva de Aulas</li>
                <li className={darkTheme ? 'list-item-dark-themed' : 'list-item'}>Atualizações</li>
                <li className={darkTheme ? 'list-item-dark-themed' : 'list-item'}>Eventos</li>
            </ul>
        </div>
    );

    return(
        <>
            {mobile ? mobileContent : desktopContent}
        </>
    );
}