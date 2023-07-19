import './header.css'
import logo from '../../assets/logo_kasa_orange.svg'

function Header(){
    return(
        <header className='header'>
         <a href="/" alt="Vers la page principale"><img src={logo} alt="Logo de KASA" /></a> 
         <ul>
            <li>
                <a href='/'>Accueil</a>
            </li>
            <li>
                <a href='/about'>A propos</a>
            </li>
         </ul>
      </header>
      )
}

export default Header