import './Footer.css'
import logoFooter from '../../assets/logos/logo-verde-brancoDesktop.png'
import whatsLogo from '../../assets/imgensMidia/whats.png'
import instaLogo from '../../assets/imgensMidia/insta.png'
import faceLogo from '../../assets/imgensMidia/face.png'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer-card'>
                <img src={logoFooter} alt="Logo evolução" className='logo'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem labore</p>
                <div>
                    <img src={faceLogo} alt="face-icon" className='midia-icon'/>
                    <img src={instaLogo} alt="insta-icon" className='midia-icon'/>
                    <img src={whatsLogo} alt="whats-icon" className='midia-icon'/>
                </div>
            </div>

            <p>&copy; 2025 [SamIamarino]. Todos os direitos reservados.</p>
        </div>
    )
}