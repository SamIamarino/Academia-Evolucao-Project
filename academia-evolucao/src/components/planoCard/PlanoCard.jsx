import './PlanoCard.css'
import { useState,useEffect } from 'react';
import WhatsAppButton from '../whatsappButton/WhatsappButton';
// Coloar photoUrl como prop no plano card
export default function PlanoCard ({plano,price,description1}) {

    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

    useEffect(() => {
           const updateValues = () => {

               const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;    
               setIsDarkTheme(darkTheme);

           };
   
           updateValues(); // Executa na inicialização
   
           const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
           themeWatcher.addEventListener("change", updateValues);
   
           return () => {
               window.removeEventListener("resize", updateValues);
               themeWatcher.removeEventListener("change", updateValues);
           };
       }, []);

    return(
        <div className="plano-card">
            <div>
                
                <div className={isDarkTheme ? 'plano-card-header-dark-themed':'plano-card-header' }>
                    <h4>{plano}</h4>
                </div>

            </div>
            <div className={isDarkTheme ? 'plano-card-body-dark-themed' : 'plano-card-body'}>
                <h1 className='plano-price'>{price}</h1>
                <p className='league-spartan-font'>{description1}</p>
                <p className='league-spartan-font'>Sem taxa de adesão.</p>
                <p className='league-spartan-font'>Pagamento parcelado no crédito ou realizado mensalmente na recepção (dinheiro, pix, ou cartão).</p>
                <p className='league-spartan-font'>*Todos os planos contém contrato.</p>
                <hr/>
                <WhatsAppButton darkTheme={isDarkTheme}> Assine aqui </WhatsAppButton>
            </div>
        </div>
    );
}