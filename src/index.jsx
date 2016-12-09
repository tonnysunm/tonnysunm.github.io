import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router'

import Nav from './components/nav'
import Hello from './page/hello'
import Works from './page/works'

const App = ({children, location})=> (
  <div>
    <Nav location={location}/>
    {children}
  </div>
)

ReactDom.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Hello} />
		<Route path="works" component={Works}/>
		<Route path="*" component={Hello}/>
	</Route>
</Router>,
document.body)