// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import Course from '../components/Course'
import Courses from '../components/Courses'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  
  ReactDOM.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/courses/:nick" element={<Course />} />
        <Route path="/courses" element={<Courses />}/>
      </Routes>
    </Router>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
