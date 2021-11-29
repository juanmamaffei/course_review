import React from 'react'
import styled from 'styled-components'

const Field = styled.div `
  
`

const ReviewForm = (props) => {
  return(<div>
    <form onSubmit = { props.handleSubmit }>
      <div className="field">
        <input type="text" onChange={ props.handleChange } value = { props.review.title } name="title" placeholder="Title of review" />
      </div>
      <div className="field">
        <input type="text" onChange={ props.handleChange } value = { props.review.description } name="description" placeholder="Description of review" />
      </div>
      <div className="field">
        <div className="rating-container">
          STARS
        </div>
      </div>
      <div className="field">
        <button type="submit">Submit</button>
      </div>
      
    </form>
  </div>) 
}

export default ReviewForm