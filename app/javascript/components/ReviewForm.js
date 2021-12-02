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

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${ SelectedStar }");
    opacity: 0.7;    
  }


`
const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 96%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`
const SubmitButton = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  margin-top: 12px;
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const Wrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`
const Headline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`
const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`
const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center;
  padding: 4px;
`
const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
      return(
        <Fragment>
          <input type="radio" value="score" name= "rating" checked={props.review.score == score} onChange={()=>console.log(score)} id={`rating-${score}`} key = {`radio_${index}`}></input>
          <label onClick={ props.setRating.bind(this,score) } key = {`label_${index}`}></label>
        </Fragment>
      )
    }
  )  

  return(<div>
    <Wrapper>
      <form onSubmit = { props.handleSubmit }>
          <Headline>Share your experience in { props.attributes.name }.</Headline>
        <Field>
          <input type="text" onChange={ props.handleChange } value = { props.review.title } name="title" placeholder="Title of review" />
        </Field>
        <Field>
          <textarea onChange={ props.handleChange } value = { props.review.description } name="description" placeholder="Description of review" />
        </Field>
        <Field>
          <RatingContainer>
          <RatingBox>
              { ratingOptions }
            </RatingBox>
          </RatingContainer>
        </Field>
        <Field>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Field>
        
      </form>
    </Wrapper>
  </div>) 
}

export default ReviewForm