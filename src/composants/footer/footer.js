import './footer.css'
import logo from '../../assets/logo_kasa_blanc.png'

function Footer(){
    return(
        <footer className='footer'>
            <img src={logo} alt="Logo de KASA" />   
            <p>© 2020 Kasa. Tous droits réservés.</p>
        </footer>
      )
}

export default Footer