import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

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
  const [loaded, setLoaded] = useState(false)

  let { nick } = useParams();

  useEffect(() => {
    axios.get(`/api/v1/courses/${nick}`)
    .then( r=> {
      setCourse(r.data.data);
      setReview(r.data.included);
      console.log(r);
      setLoaded(true);
    })
    .catch( r => { console.log(r)} )
  }, [course.length])

  const handleChange = (event) => { 
    event.preventDefault(); 
    setReview(Object.assign(
      review,
      { [event.target.name]: event.target.value }
      
    ))
    console.log(review)
  }
  const handleSubmit = (event) => { 
    event.preventDefault();

    const csrf = document.querySelector("[name=csrf-token]").content
    axios.defaults.headers.common["CSRF-TOKEN"] = csrf

    const course_id = course.id
    console.log(review)

    axios.post("/api/v1/reviews", {
      ["title"]: review.title,
      ["description"]: review.description,
      ["score"]: review.score,
      course_id
      })
      .then(response => {
        const included = [...course.included, response.data]
        setReview({title: '', description: '', score: 0})
      })
      .catch( response => {console.log(review)});
  }

  const setRating = (score, evnt) => {
    evnt.preventDefault();

    setReview({...review,score})
    console.log(review)
  }
  return(
    <Wrapper>
      <Column>
        <Main>
          { loaded &&
            <Header>
              <h1><img src={ course.attributes.image_url }></img> { course.attributes.name }</h1>
              <TotalReviews>{ review.length } user reviews</TotalReviews>
              
              <TotalOutOf>3 out of 5</TotalOutOf>
            </Header>
          }
          <div className="reviews"></div>
                      
    <Link to="/courses">Courses</Link>
        </Main>
      </Column>
      
      <Column>
          <ReviewForm
            handleChange = { handleChange }
            handleSubmit = { handleSubmit }
            setRating = { setRating }
            attributes = { course.attributes }
            review = { review }
          />
      </Column>

    </Wrapper>
  )
}

export default Course