import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
    return(<div>Hola, mundo.
        <h2><Link to="/courses">Courses</Link></h2>
    </div>)
}

export default App