import React from 'react'

const Review = (props) => {

	return (
		<div>
			<div className="title">{ props.attributes.title }</div>
			<div className="description">{ props.attributes.description }</div>
			<div className="score">{ props.attributes.score } STARS</div>
		</div>
	)
}

export default Review