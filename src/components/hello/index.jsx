import React from 'react'
import CSSModules from 'react-css-modules'

import svg from '../../asset/img/hello/introduction.svg'

import styles from './hello.css'

const Hello = ()=>(
	<div>
        <section styleName="hello">
            <img styleName="helloImg" src={svg} />
            <div>
                <h2>Hello World</h2>
                <p>This is us, we are a couple and working partner. We develop and design our world.</p>
            </div>
        </section>
        <section styleName="work">
            <img styleName="workDesktop" src="asset/img/hello/work.svg" />
            <img styleName="mobileDesktop" src="asset/img/hello/work_mobile.svg" />
            <div>
                <h2>Focus on Creating</h2>
                <p>We're keen on working in IT factory.
                    <br/>Implementing is a great way to understand this world.
                    <br/> Now is the best time to do something.</p>
            </div>
        </section>
        <section styleName="hobby">
            <img src="asset/img/hello/hobby.svg" />
            <div>
                <h2>Enjoy Life</h2>
                <p>We try to keep balance, it really can help running longer.
                    <br/>and sometime it will open another door for you.
                    <br/>So enjoy it.
                </p>
            </div>
        </section>
        <section styleName="nz">
            <img src="asset/img/hello/NZ.svg" />
            <div>
                <h2>New Zealand</h2>
                <p>We are living in NZ at present, it's a wounderful land to explore our life.
                    <br/><span>We are here for you</span>
                </p>
                <a href="mailto:tonny.litao@gmail.com">Email us</a>
            </div>
        </section>
    </div>
)

export default CSSModules(Hello, styles)