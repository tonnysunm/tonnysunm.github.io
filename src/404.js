import React from 'react'
import ReactDom from 'react-dom'
import CSSModules from 'react-css-modules'

import appStyle from './app.css'

import svg from './components/nav/img/logo.svg'

if ((window.location||{}).pathname.startsWith('/works')) {
    window.location = "/?" + "q=/works"
}else {
	const style = {
		div: {
			display: 'flex',
		    alignItems: 'center',
		    flexDirection: 'column',
		}
	}

ReactDom.render(
<div style={style.div}>
	<img style={{"width":"50%"}} src={svg} />
	<a href="/">Home</a>
</div>, document.body)
}
