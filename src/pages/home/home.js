import './home.css'
import logements from '../../datas/logements'
import Banner from '../../composants/Banner/Banner'
import bannerImage from '../../assets/lake-checrouit.jpg'
import Card from '../../composants/card/card'

function Home(){
    return(
        <div>
        <Banner lien={bannerImage} titre='Chez vous, partout et ailleurs'/>
        <section className='logements'>
            {logements.map(({ id, title, cover }) =>
             <Card titre={title} cover={cover} id={id}/>
				)}
        </section>

        </div>
        
      )
}

export default Home

