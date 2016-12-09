import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './nav.css'

const Nav = ({styles, location})=>{
    
    const isWorks = location.pathname === '/works'
    const highlight = {color:"#5EB7F1"}
    const normal = {color:"rgba(0,0,0,0.75)"}

    return (
    	<nav styleName="nav">
            <Link styleName="logo" to="/">
                <img src="asset/img/logo.svg" />
            </Link>
            <ul>
                <li styleName="menuHello"><Link to="/" style={!isWorks?highlight:normal}>Hello</Link></li>
                <li><Link to="/works" style={isWorks?highlight:normal}>Works</Link></li>
                <li><a href="https://medium.com/tonny-sunm">Blog</a></li>
            </ul>
    	</nav>
    )
}

export default CSSModules(Nav, styles)