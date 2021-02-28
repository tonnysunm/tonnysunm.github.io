import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './nav.css'

import logoSVG from './img/logo.svg'

const Nav = ({styles, location={}})=>{

    const isHome = location.pathname === '/'
    const isWorks = location.pathname === '/works'

    return (
    	<nav styleName="nav">
            <Link styleName="logo" to="/">
                <img src={logoSVG} />
                <span>Tonny&Sunm</span>
            </Link>
            <div styleName="menu">
                <Link to="/" styleName={isHome?"active":""}>Hello</Link>
                <Link to="/works" styleName={isWorks?"active":""}>Works</Link>
                <a href="https://tonny.medium.com/">Blog</a>
            </div>
    	</nav>
    )
}

export default CSSModules(Nav, styles)
