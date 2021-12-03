import React from 'react'
import styled from 'styled-components'
import Star from './images/Star'
import SelectedStar from './images/SelectedStar'

const Card = styled.div`
  border-radius: 4px;
  border: 3px solid #FCD34D;
  padding: 10px;
  margin: 10px 15px 0 0;
  position: relative;
  background-color: #FCD34D; 
`

const Title = styled.div`
  padding: 10px 0px 0px 0px;
  // font-family: 'Poppins-Bold';
  font-size: 18px;
`

const Description = styled.div`
  padding: 0 0 10px 0;
  font-size: 14px;
`
const Options = styled.div`
position:absolute;
right :15px;
top: 15px;
display: flex;
flex-direction: columns;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Starx = styled.div`
  display: flex;
  position: relative;
  i {
    &.fill {
      background-image: url("data:image/svg+xml;charset=UTF-8,${SelectedStar}");
    }
    &.noFill {
      background-image: url("data:image/svg+xml;charset=UTF-8,${Star}");
      opacity: 0.7;
    }
    height: 24px;
    width: 24px;
    margin: 2px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    font-size: 24px;
  }
`

const ScoreIcons = (s) => {
	let arr = []
  
  for(let p=1; p<6;p++){
    if (s>=p) {
      arr.push(<i className='fill' key={"'star_'" + p }></i>)
      
    } else {
      arr.push(<i className='noFill' key={"'star_'" + p } ></i>)
    }
  }

	return arr
	
}

const Review = (props) => {

	return (
		<Card>
			<Title>{ props.attributes.title }</Title>
			<Description>{ props.attributes.description }</Description>
			<Starx>{ ScoreIcons(props.attributes.score) }</Starx>
		</Card>
	)
}

export default Review