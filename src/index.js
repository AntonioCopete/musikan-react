import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './UI/Theme/Global.styles'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalStyles />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
