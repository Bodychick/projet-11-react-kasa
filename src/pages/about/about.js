import Banner from '../../composants/Banner/Banner'
import './about.css'
import Dropdown from '../../composants/dropdown/dropdown'
import AboutData from '../../datas/about.json'

function About(){
    const lien ='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg';
      
    // Afficher les informations du logement trouvé
    return (
      <section className='about'>
        <Banner lien={lien} titre=""/>
        {AboutData.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([title, value]) => (
            <Dropdown titre={title} dropdown={value} />
          ))}
        </div>
      ))}
      </section>
      
    );
  };

export default About

