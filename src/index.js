import React from 'react'
import ReactDOM from 'react-dom'
import Theme from './ui/styles/Theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store, { persistor } from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Theme>
          <App />
        </Theme>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
