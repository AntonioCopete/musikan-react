import React from 'react'
import ReactDOM from 'react-dom'
import Theme from './ui/styles/Theme'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <App />
      </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
