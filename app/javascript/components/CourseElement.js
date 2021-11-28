import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Card = styled.div`
    border: 1px solid #efefef;
    background-color: #FFF;
`

const CourseLogo = styled.div`
    text-align: center;
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 50px;
    img{
        height: 50px;
        width: 50px;
        border-radius: 100%
        border: 1px solid #efefef;
    }
`
const CourseName = styled.div `
    padding: 20px 0 20px 0;
`

const LinkWrapper = styled.div `
    margin: 30px 0 20px 0;
    height: 50px;
    a {
        color: white;
        background: black;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid black;
        width: 100px;
        text-decoration: none;
        text-overflow: ellipsis;
    }
`
const CourseElement = (props)=>{
    
    const truncate = (str) => {
        return str.length > 12 ? str.substring(0, 10) + "..." : str;
    }

    return(
        <Card>
            <CourseLogo><img src={ props.attributes.image_url }></img></CourseLogo>
            <CourseName>{ props.attributes.name }</CourseName>
            <div className="course-score">{ props.attributes.score }</div>
            <LinkWrapper>
                <Link to={`/courses/${props.attributes.nick}`}>Go to { truncate(props.attributes.name) }</Link>
            </LinkWrapper>
        </Card>
    )
}

export default CourseElement