import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './nav.css'

const Nav = ({styles, location})=>{
    
    const isWorks = location.pathname === '/works'
    return (
    	<nav styleName="nav">
            <Link styleName="logo" to="/">
                <img src="asset/img/logo.svg" />
                <img styleName="logTitle" src="asset/img/tonnysunm.svg" />
            </Link>
            <ul>
                <li styleName="menuHello"><Link to="/" styleName={!isWorks?"active":""}>Hello</Link></li>
                <li><Link to="/works" styleName={isWorks?"active":""}>Works</Link></li>
                <li><a href="https://medium.com/tonny-sunm">Blog</a></li>
            </ul>
    	</nav>
    )
}

export default CSSModules(Nav, styles)