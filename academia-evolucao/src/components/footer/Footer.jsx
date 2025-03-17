import './Footer.css'
import logoFooter from '../../assets/logos/logo-verde-brancoDesktop.png'
import whatsLogo from '../../assets/imgensMidia/whats.svg'
import instaLogo from '../../assets/imgensMidia/insta.svg'
import faceLogo from '../../assets/imgensMidia/face.svg'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-card'>
                <img src={logoFooter} alt="Logo evolução" className='logo'/>

                <div className='text-container'> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem labore</p>
                </div>

                <div className='icon-container'>
                    {/* mudar pra svg para aplicar os estilos certos e isso tem que ser 'wrapped com um tag <a></a> */}
                    <img src={faceLogo} alt="face-icon" className='midia-icon'/> 
                    <img src={instaLogo} alt="insta-icon" className='midia-icon'/>
                    <img src={whatsLogo} alt="whats-icon" className='midia-icon'/>
                </div>
            </div>
            <hr />

            {/* <p>&copy; 2025 [SamIamarino]. Todos os direitos reservados.</p> */}
        </footer>
    )
}