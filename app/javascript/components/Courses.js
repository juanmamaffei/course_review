import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import CourseElement from './CourseElement'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    font-family: "sans-serif";
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    padding: 20px;
    width: 100%;
`


const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios
            .get('/api/v1/courses.json')
            .then((r)=> { setCourses(r.data.data) /*; console.log(r.data.data) */ })
            .catch((r)=>{ console.log(r) })
        }, [courses.length] )


    const courseList = courses.map( i => {
        return(
            <CourseElement key={ i.id } attributes={ i.attributes }/>
        )
    })
    return(
        <Home>
            <Header>
                <h1>Courses</h1>
                <Subheader>Rate the courses of TransmediAcademy.</Subheader>
            </Header>
                <Grid>
                    { courseList }
                </Grid>
        </Home>
    )
}

export default Courses