import './tags.css'

function CareScale(props) {
    var tags = props.tags;

	return (
        <div className='tags'>
        		{tags.map((tag, index) =>
				<span key={index} className="tag">{tag}</span>
			)}
		</div>
	)
}

export default CareScale