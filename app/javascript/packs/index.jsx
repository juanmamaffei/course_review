// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import Course from '../components/Course'
import Courses from '../components/Courses'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/courses/:slug" element={<Course slug="" />} />
        <Route exact path="/courses" element={<Courses />}/>
      </Routes>
    </BrowserRouter>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
