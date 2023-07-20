
function Card(props){

    return(
        <article >
                <a href={`/logement?id=${props.id}`}>
                    <img src={props.cover} alt={props.titre}/>
                    <h2>{props.titre}</h2>
                </a>	
	    </article>
    )
}
export default Card