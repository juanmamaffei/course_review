import React from 'react'
import styled from 'styled-components'
import Star from './images/Star'
import SelectedStar from './images/SelectedStar'

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 18px;
`

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Options = styled.div`
position:absolute;
right :15px;
top: 15px;
display: flex;
flex-direction: columns;
`

const Icon = styled.button`
  display: flex;
  box-shadow: none;
  border-radius: 4px;
  margin: 0 4px;
  i {
    font-size: 18px;
  }
`

const Author = styled.div`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  margin: 0 8px;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const AvatarWrapper = styled.div`
  width: 25px;
  height: 25px;
  background: green;
  border-radius: 100%;
  margin-right: 12px;
  margin-bottom: -12px;
  svg {
    width: 25px;
    height: 25px;
  }
`
const Starx = styled.div`
  display: flex;
  position: relative;
  i {
    background-image: url("data:image/svg+xml;charset=UTF-8,${SelectedStar}");
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
	for(let step=1; step <= parseInt(s); step++) {
		 arr.push(<i></i>)
	}
	return arr
	
}

const Review = (props) => {

	return (
		<Card>
			<Title>{ props.attributes.title }</Title>
			<Description>{ props.attributes.description }</Description>
			<div className="score">{ props.attributes.score } STARS</div>
			<Starx>{ ScoreIcons(props.attributes.score) }</Starx>
		</Card>
	)
}

export default Review