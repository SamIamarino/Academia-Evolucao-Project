import './headerStyles.css';
import logoDesktopLight from '../../assets/logos/logo-azul-pretoDesktop.png'
import logoMobileLight from '../../assets/logos/logo-azul-pretoMobile.png';
import logoMobileDark from '../../assets/logos/logo-verde-brancoMobile.png';
import logoDesktopDark from '../../assets/logos/logo-verde-brancoDesktop.png';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

export default function Header({toggleNavBar}){


    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Isso no primeiro render -- verifica qual logo precisa colocar 
    const [logo, setLogo] = useState(isDarkTheme ? (isMobile ? logoMobileDark : logoDesktopDark) : (isMobile ? logoMobileLight : logoDesktopLight));


    useEffect(() => {
        const updateValues = () => {
            const mobile = window.innerWidth <= 750;
            // retorna true falso
            const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

            setIsMobile(mobile);
            setIsDarkTheme(darkTheme);

            if (darkTheme && mobile) {
                setLogo(logoMobileDark);
            } else if (darkTheme && !mobile) {
                setLogo(logoDesktopDark);
            } else if (!darkTheme && mobile) {
                setLogo(logoMobileLight);
            } else {
                setLogo(logoDesktopLight);
            }
        };

        updateValues(); // Executa na inicialização

        window.addEventListener("resize", updateValues);
        const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
        themeWatcher.addEventListener("change", updateValues);

        return () => {
            window.removeEventListener("resize", updateValues);
            themeWatcher.removeEventListener("change", updateValues);
        };
    }, []);

    return(
    <header className={isDarkTheme ? 'dark-themed-header' : undefined}>
       <RouterLink to="/">
        <img src={logo} alt="logo-evolução" className="logo"/>    
       </RouterLink>
       
        {toggleNavBar ? 
        <nav>
            <ul className='link-container'>
                <li><ScrollLink to="nossoEspaco" className={isDarkTheme ? 'dark-themed-header-a' : 'styled-links'}>Nosso Espaço</ScrollLink></li>
                <li><ScrollLink to="nossosPlanos" className={isDarkTheme ? 'dark-themed-header-a' : 'styled-links'}>Planos</ScrollLink></li>
                <li><ScrollLink to="horarios" className={isDarkTheme ? 'dark-themed-header-a' : 'styled-links'}>Horarios</ScrollLink></li>
                <li><ScrollLink to="contatos" className={isDarkTheme ? 'dark-themed-header-a' : 'styled-links'}>Contato</ScrollLink></li>
            </ul>    
        </nav> : undefined}
    </header>
    );
}