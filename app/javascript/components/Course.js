import React, { useState, useEffect, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import Review from './Review'
import SelectedStar from './images/SelectedStar'
import Monstruo from 'images/monstruo.png'


const Wrapper = styled.div `
  left-margin: auto;
  right-margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

`
const Column = styled.div `
  background: #E5E7EB;
  color: #111827;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    overflow: hidden;
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

const StarsPainted = styled.div `

  font-size: 18px;
  font-weight: bold;
  width: 100%;
  background-image: url("data:image/svg+xml;charset=UTF-8,${SelectedStar}");
  background-repeat: repeat-x;
  background-size: 20%;
  height: 66px;

`
const PaintedWrapper = styled.div`
  width: ${ 50 } %;
`
const Average = styled.span `
  color: green;
`
const BackButton = styled.div `
  margin: 12px 0 0 0;
  padding: 12px;
  font-size:18px;
  font-weight: bold;
  color: #7c3aed;
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

    axios.post("/api/v1/reviews", {
      ["title"]: actualReview.title,
      ["description"]: actualReview.description,
      ["score"]: actualReview.score,
      course_id
      })
      .then(response => {
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
  }

  let ReviewList, totalScore = 0
  if (loaded && review) {
    ReviewList = review.slice(0).reverse().map((item, index) => {
      totalScore = Number(totalScore) + Number(item.attributes.score)
      return (
        <Review key={ index } attributes={ item.attributes } />
      )
    })
  }
  let averageScore = Number(totalScore) / Number(review.length)

  return(
    <Wrapper>
      { loaded &&

      <Fragment>
        <Column>
          <Main>
            <BackButton>
              <Link to="/courses"> 🔙 Back to courses</Link>
            </BackButton>  
          <Header>
            <h1><img src={ course.attributes.image_url || Monstruo }></img> { course.attributes.name }</h1>
            <TotalReviews>{ review.length } user reviews</TotalReviews>
            <Average>{ (Math.round(averageScore*100)/100)} / 5 stars</Average>
          </Header>

          { ReviewList }    
          
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