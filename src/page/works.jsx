import React from 'react'
import CSSModules from 'react-css-modules'

import styles from './works.css'

const Works = ()=>{
	const works = []
	for (let i = 1; i <= 18; i++) {
		works.push(
			<div styleName="gallery">
				<img src={`asset/img/works/cover${i}.jpg`}/>
			</div>)
	}
	return (
		<div className="main">
			{works}
		</div>
	)
}

export default CSSModules(Works, styles)