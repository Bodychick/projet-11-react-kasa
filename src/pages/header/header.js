import './header.css'
import logo from '../assets/logo_kasa_orange.svg'

function Header(){
    return(
        <header className='header'>
         <img src={logo} alt="Logo de KASA" />   
         <ul>
            <li>
                <a href='#'>Accueil</a>
            </li>
            <li>
                <a href='#'>A propos</a>
            </li>
         </ul>
      </header>
      )
}

export default Header