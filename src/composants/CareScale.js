
function CareScale(props) {
	const range = [1, 2, 3, 4, 5]
    const styles = {
        color: "#969696",
        fontSize:"1.25em",
        padding:"4px"
    }
    const styleOrange = {
        color:"#FF6060",
        fontSize:"1.25em",
        padding:"4px"
    }

	return (
        <div>
        		{range.map((rangeElem, index) =>
				props.rating >= rangeElem ? (
					<i key={index} className="fa-solid fa-star" style={styleOrange}></i> 
				) : <i key={index} className="fa-solid fa-star" style={styles}></i> 
			)}
		</div>
	)
}

export default CareScale