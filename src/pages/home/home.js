import './home.css'
import logements from '../../datas/logements'
import Banner from '../../composants/Banner'
import bannerImage from '../../assets/lake-checrouit.jpg'

function Home(){
    return(
        <div>
        <Banner lien={bannerImage}/>
        <section className='logements'>
            {logements.map(({ id, title, cover }) =>
                  			
						<article key={id}>
                <a href={`/logement?id=${id}`}>
                    <img src={cover} alt={title}/>
                    <h2>{title}</h2>
                </a>	
						</article>
				)}
        </section>

        </div>
        
      )
}

export default Home

