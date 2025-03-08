import './headerStyles.css';
import logo from '../../assets/logos/logo-azul-pretoDesktop.png'

export default function Header(){
    return(
    <header>
        <img src={logo} alt="" className='logo'/>    
        <div>
            <ul>
                <li><a href="#">Nosso Espaço</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Planos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>    
        </div>
    </header>
    );
}