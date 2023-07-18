import '../css/Banner.css'

function Banner(props) {
	return (
    <section className='lmj-banner'>
        <img src={props.lien}/>
    </section>
    )
}

export default Banner