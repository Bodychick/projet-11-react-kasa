import '../../css/Banner.css'

function Banner(props) {
	return (
    <section className='lmj-banner'>
        <img src={props.lien} alt="bannière"/>
        {props.titre.length >1 && <h1>{props.titre}</h1>  }
        
    </section>
    )
}

export default Banner