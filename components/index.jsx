import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './molecules/home.jsx'
import Main from './molecules/main.jsx'
import Something from './molecules/something.jsx'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/something' component={Something}/>
    </Route>
  </Router>,
  document.getElementById('container')


)
