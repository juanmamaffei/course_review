import React, { Fragment } from 'react'
import styled from 'styled-components'

import Star from './images/Star'
import SelectedStar from './images/SelectedStar'

const RatingContainer = styled.div `
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 4px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;  
`
const RatingBox = styled.div `
  background: #fff;
  
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 48px;
    height: 48px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${ Star }");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${ SelectedStar }")
  }
`

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
      return(
        <Fragment>
          <input type="radio" value="score" name= "rating" checked={props.review.score == score} onChange={()=>console.log(score)} id={`rating-${score}`}></input>
          <label onClick={ props.setRating.bind(this,score) } ></label>
        </Fragment>
      )
    }
  )
  
  return(<div>
    <form onSubmit = { props.handleSubmit }>
      <div className="field">
        <input type="text" onChange={ props.handleChange } value = { props.review.title } name="title" placeholder="Title of review" />
      </div>
      <div className="field">
        <input type="text" onChange={ props.handleChange } value = { props.review.description } name="description" placeholder="Description of review" />
      </div>
      <div className="field">
        <RatingContainer>
          <RatingBox>
            { ratingOptions }
          </RatingBox>
        </RatingContainer>
      </div>
      <div className="field">
        <button type="submit">Submit</button>
      </div>
      
    </form>
  </div>) 
}

export default ReviewForm