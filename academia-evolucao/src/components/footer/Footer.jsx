import './Footer.css'
import logoFooter from '../../assets/logos/logo-verde-brancoDesktop.png'
import whatsLogo from '../../assets/imgensMidia/whats.svg'
import instaLogo from '../../assets/imgensMidia/insta.svg'
import faceLogo from '../../assets/imgensMidia/face.svg'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-card'>
                <img src={logoFooter} alt="Logo evolução" className='logo-footer'/>

                <div className='footer-text-container'> 
                    <p>Nossas redes sociais: </p>
                </div>

                <div className='icon-container' id='contatos'>
                    {/* mudar pra svg para aplicar os estilos certos e isso tem que ser 'wrapped com um tag <a></a> */}
                    <a href="https://www.facebook.com/evolucaoitapira">
                        <img src={faceLogo} alt="face-icon" className='midia-icon'/> 
                    </a>
                    <a href="https://www.instagram.com/evolucaoitapira/">
                        <img src={instaLogo} alt="insta-icon" className='midia-icon'/>
                    </a>
                    <a href="https://wa.me/message/JIYIDMVOUKSKJ1">
                        <img src={whatsLogo} alt="whats-icon" className='midia-icon'/>
                    </a>
                </div>
            </div>
            <hr />

            {/* <p>&copy; 2025 [SamIamarino]. Todos os direitos reservados.</p> */}
        </footer>
    )
}