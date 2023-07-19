import '../css/Banner.css'

function Banner(props) {
	return (
    <section className='lmj-banner'>
        <img src={props.lien} alt="bannière"/>
        <h1>Chez vous, partout et ailleurs</h1>
    </section>
    )
}

export default Banner