import './headerStyles.css';
import logoDesktopLight from '../../assets/logos/logo-azul-pretoDesktop.png'
import logoMobileLight from '../../assets/logos/logo-azul-pretoMobile.png';
import { useState, useEffect } from 'react';

export default function Header(){


    //É preciso que a DOM renderize novamente para ser trocada o icone.
    const [logo, setLogo] = useState(window.innerWidth <= 750 ? logoMobileLight : logoDesktopLight);

    useEffect(() => {
        
        const handleResize = () => {
            setLogo(window.innerWidth <= 750 ? logoMobileLight : logoDesktopLight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
    <header>
        <img src={logo} alt="logo-evolução" className="logo"/>    
        <div>
            <ul>
                <li><a href="#nossoEspaco">Nosso Espaço</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Planos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>    
        </div>
    </header>
    );
}