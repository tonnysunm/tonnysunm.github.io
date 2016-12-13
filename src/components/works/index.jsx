import React from 'react'
import CSSModules from 'react-css-modules'

import styles from './works.css'

import works from './works.json.js'

import WorksShow from '../worksShow'

const Works = ()=>{
	let worksShow = null;

	const worksDom = works.map(work=>{
		const src = `asset/img/works/${work.img}`

		return (
			<div styleName="gallery">
				<div styleName="card"> 
					<img src={src} onClick={(e)=>{
						e.preventDefault()
						worksShow.open(src)

						//TODO safari bug
						document.body.style.overflowY = "hidden"
					}}/>
					<div styleName="info">
						{work.behance ? <a 
							styleName="behanceTitle" 
							href={work.behance}>
								{work.title}
							</a>
						: <a 
							styleName="title"> 
								{work.title}
						</a>}
						{work.behance && <a href={work.behance}><svg fill="#5EB7F1" xmlns="http://www.w3.org/2000/svg" width="25" height="100%" viewBox="0 0 46 29">
							<path d="M13.1 0c1.3 0 2.5 0.1 3.6 0.4c1.1 0.2 2 0.6 2.8 1.1c0.8 0.5 1.4 1.2 1.8 2.1c0.4 0.9 0.6 2 0.6 3.2 c0 1.4-0.3 2.6-1 3.5c-0.6 0.9-1.6 1.7-2.8 2.3c1.7 0.5 3 1.4 3.8 2.6c0.8 1.2 1.3 2.7 1.3 4.4c0 1.4-0.3 2.6-0.8 3.6 c-0.5 1-1.3 1.9-2.2 2.5c-0.9 0.6-2 1.1-3.2 1.4c-1.2 0.3-2.4 0.5-3.6 0.5H0V0H13.1z M12.3 11.2c1.1 0 2-0.3 2.7-0.8 c0.7-0.5 1-1.4 1-2.5c0-0.6-0.1-1.2-0.3-1.6c-0.2-0.4-0.5-0.7-0.9-1c-0.4-0.2-0.8-0.4-1.3-0.5c-0.5-0.1-1-0.1-1.6-0.1H6.1v6.5 H12.3z M12.6 23c0.6 0 1.2-0.1 1.7-0.2c0.5-0.1 1-0.3 1.4-0.6c0.4-0.3 0.7-0.6 1-1.1c0.2-0.5 0.4-1.1 0.4-1.8 c0-1.4-0.4-2.4-1.2-3.1c-0.8-0.6-1.9-0.9-3.2-0.9H6.1V23H12.6z"></path>
						    <path d="M31.9 22.9c0.8 0.8 2 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.9c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.6-0.8 4.2-0.8c1.7 0 3.2 0.3 4.5 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8C45 16 45.1 17.4 45 19H30.5C30.5 20.6 31.1 22.1 31.9 22.9z M38.2 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1 0.7-1.4 1.1c-0.4 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3h9 C39.4 14.1 38.9 13.1 38.2 12.4z"></path>
		    				<rect x="29.4" y="1.9" width="11.2" height="2.7"></rect>
						</svg></a>}
					</div>
				</div>
			</div>
		)
	})

	return (
		<div>
			<WorksShow ref={dom=>{worksShow=dom}}/>
			{worksDom}
		</div>
	)
}

export default CSSModules(Works, styles)