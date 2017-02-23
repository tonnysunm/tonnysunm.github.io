import React from 'react'
import CSSModules from 'react-css-modules'

import styles from './works.css'

import works from './works.json.js'

import WorksShow from '../worksShow'

import behance from './behance.svg'
import dribbble from './dribbble.svg'
import github from './github.svg'

import grayBehance from './behance_gray.svg'
import grayDribbble from './dribbble_gray.svg'
import grayGithub from './github_gray.svg'
import grayDouban from './douban_gray.svg'


//for github.io
const ASSET_FOLDER = process.env.ASSET_FOLDER;

const Works = ()=>{
	let worksShow = null;

	const worksDom = works.map((work, i)=>{
		const src = `${ASSET_FOLDER}/img/works/${work.img}`

		return (
			<div key={i} styleName="gallery">
				<div styleName="card"> 
					<img src={src} onClick={(e)=>{
						e.preventDefault()
						worksShow.open(src)

						//TODO safari bug
						document.body.style.overflowY = "hidden"
					}}/>
					<div styleName="info">
						{(work.behance || work.dribbble) ? <a 
							styleName="behanceTitle" 
							href={work.behance || work.dribbble}>
								{work.title}
							</a>
						: <a 
							styleName="title"> 
								{work.title}
						</a>}
						{work.behance && <a styleName="iconLink" href={work.behance}><img src={grayBehance}/></a>}

						{work.dribbble && <a styleName="iconLink" href={work.dribbble}><img src={grayDribbble}/></a>}

						{work.github && <a styleName="iconLink" href={work.github}><img src={grayGithub}/></a>}

						{work.douban && <a styleName="iconLink" href={work.douban}><img src={grayDouban}/></a>}
					</div>
				</div>
			</div>
		)
	})

	return (
		<div>
			<div styleName="header">
				<a href="https://dribbble.com/sunmlu"><img src={dribbble}/></a>
				<a href="https://www.behance.net/sunmlu"><img src={behance}/></a>
				<a href="https://github.com/TonnyTao"><img src={github}/></a>
			</div>
			<WorksShow ref={dom=>{worksShow=dom}}/>
			{worksDom}
		</div>
	)
}

export default CSSModules(Works, styles)