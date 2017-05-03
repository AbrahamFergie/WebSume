import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './molecules/home/index.jsx'
import Main from './molecules/main/index.jsx'
import Something from './molecules/something/index.jsx'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/something' component={Something}/>
    </Route>
  </Router>,
  document.getElementById('container')


)
