import React, { useState, useEffect, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import Review from './Review'

const Wrapper = styled.div `
  left-margin: auto;
  right-margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

`
const Column = styled.div `
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: black;
  }
`
const Main = styled.div `
  padding-left: 50px;
`
const Header = styled.div `
  padding: 50px 100px 50px 0px;
  font-size: 30px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -13px;
  }

`
const TotalReviews = styled.div `
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutOf = styled.div `
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`
const Course = (props) => {
    
  const [course, setCourse] = useState({})
  const [review, setReview] = useState({})
  const [actualReview, setActualReview]= useState({title: "", description: "", score: 0})
  const [loaded, setLoaded] = useState(false)

  let { nick } = useParams();

  useEffect(() => {
    axios.get(`/api/v1/courses/${nick}`)
    .then( r=> {
      setCourse(r.data.data);
      setReview(r.data.included);
      setLoaded(true);
    })
    .catch( r => { console.log(r)} )
  }, [course.length])

  const handleChange = (event) => { 
    event.preventDefault();
    setActualReview(Object.assign({},actualReview,
      { [event.target.name]: event.target.value }
      
    ))
  }
  const handleSubmit = (event) => { 
    event.preventDefault();

    const csrf = document.querySelector("[name=csrf-token]").content
    axios.defaults.headers.common["CSRF-TOKEN"] = csrf

    const course_id = course.id
    console.log(actualReview)

    axios.post("/api/v1/reviews", {
      ["title"]: actualReview.title,
      ["description"]: actualReview.description,
      ["score"]: actualReview.score,
      course_id
      })
      .then(response => {
        //const included = [...course.relationships.reviews.data, response.data.data.attributes];
        //console.log(included);
        //console.log(response);
        setActualReview({title: '', description: '', score: 0})
        setReview([...review, response.data.data]);
        
      })
      .catch( response => {
        console.log(review);
        console.log(response);
        console.log(course)} );
  }

  const setRating = (score, evnt) => {
    evnt.preventDefault();
    setActualReview({...actualReview,score})
    console.log("Actual review", actualReview)
  }

  let ReviewList, totalScore = 0
  if (loaded && review) {
    // console.log(review)
    ReviewList = review.slice(0).reverse().map((item, index) => {
      totalScore = Number(totalScore) + Number(item.attributes.score)
      return (
        <Review key={ index } attributes={ item.attributes } />
      )
    })
  }

  return(
    <Wrapper>
      { loaded &&

      <Fragment>
        <Column>
          <Main>
            
              
            <Header>
              <h1><img src={ course.attributes.image_url }></img> { course.attributes.name }</h1>
              <TotalReviews>{ review.length } user reviews</TotalReviews>
              
              <TotalOutOf>{ Number(totalScore) / Number(review.length) } out of 5</TotalOutOf>
            </Header>
          
          { ReviewList }    
          <Link to="/courses">Courses</Link>
          </Main>
        </Column>
        
        <Column>
            <ReviewForm
              handleChange = { handleChange }
              handleSubmit = { handleSubmit }
              setRating = { setRating }
              attributes = { course.attributes }
              review = { actualReview }
            />
        </Column>
      </Fragment>
      }

    </Wrapper>
  )
}

export default Course