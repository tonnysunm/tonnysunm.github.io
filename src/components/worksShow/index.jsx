import React, {Component} from 'react'
import CSSModules from 'react-css-modules'

import styles from './worksshow.css'

class WorksShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			src: '',
		}
	}

	open(src){
		this.setState({
			open: true,
			src: src
		})
	}

	render() {
		return (
			<div 
				styleName="container" 
				style={{display: this.state.open?'flex':'none'}}
				onClick={()=>{
					this.setState({open:false, src:''})
					document.body.style.overflowY = "scroll"
				}}
			>
				<img src={this.state.src}/>
			</div>
		)
	}
}

export default CSSModules(WorksShow, styles)