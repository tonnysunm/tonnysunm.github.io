import React from 'react'
import CSSModules from 'react-css-modules'

import styles from './works.css'

import WorksShow from '../worksShow'

const Works = ()=>{
	let worksShow = null;

	const works = []
	for (let i = 1; i <= 16; i++) {
		const src = `asset/img/works/cover${i}.jpg`
		works.push(
			<div styleName="gallery">
				<img src={src} onClick={(e)=>{
					worksShow.open(src)

					document.body.style.overflowY = "hidden"
				}}/>
			</div>)
	}

	return (
		<div>
			<WorksShow ref={dom=>{worksShow=dom}}/>
			{works}
		</div>
	)
}

export default CSSModules(Works, styles)