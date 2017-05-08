import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'

import App from './app'

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
)

// Service worker detection & registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(() => {
      console.log('Service Worker Registered')
    })
}
