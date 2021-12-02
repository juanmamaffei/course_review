import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Monstruo from 'images/monstruo.png'

const Card = styled.div`
    border: 1px solid #efefef;
    background-color: #E5E7EB;
    color: #EF4444;
    border-radius: 10px;
    
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
        background: #EF4444;
        border-radius: 4px;
        padding: 10px 50px;
        width: 100px;
        text-decoration: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 10px 0 10px;
        &:hover{
            background-color: #FCD34D;
          }
    }


   
`
const CourseElement = (props)=>{
    
    const truncate = (str) => {
        return str.length > 12 ? str.substring(0, 10) + "..." : str;
    }
    let imagePath
    if (props.attributes.image_url=="") {
        imagePath = Monstruo
    }
    else{
        imagePath = props.attributes.image_url
    }
    return(
        <Card>
            <CourseLogo><img src={ imagePath }></img></CourseLogo>
            <CourseName>{ props.attributes.name }</CourseName>
            <div className="course-score">{ props.attributes.score }</div>
            <LinkWrapper>
                <Link to={`/courses/${props.attributes.nick}`}>Go to { truncate(props.attributes.name) }</Link>
            </LinkWrapper>
        </Card>
    )
}

export default CourseElement