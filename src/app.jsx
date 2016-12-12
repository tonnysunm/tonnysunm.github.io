import React from 'react'
import CSSModules from 'react-css-modules'

import Nav from './components/nav'

import styles from './app.css'

const App = ({children, location})=> (
  <div>
    <Nav location={location}/>
    <div styleName="main">
    	{children}
    </div>
  </div>
)

export default CSSModules(App, styles)