import React from 'react'
import {Link} from 'react-router-dom'

import Routes from './routes'

const App = () => (
  <div>
    <h1>Front End Web Code Test</h1>
    <nav className="menu">
      <Link to="/">Home</Link>{' | '}
      <Link to="/suggestions">Submit Suggestions</Link>
    </nav>

    <Routes/>
  </div>
)

export default App
