import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router'

import Hello from './components/hello'
import Works from './components/works'

import App from './app'

ReactDom.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Hello} />
		<Route path="works" component={Works}/>
		<Route path="*" component={Hello}/>
	</Route>
</Router>,
document.body)