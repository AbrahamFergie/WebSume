import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './molecules/home.jsx'
import Main from './molecules/main.jsx'
import BookList from './molecules/book-list.jsx'
// import './style.css'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/bookList' component={BookList}/>
    </Route>
  </Router>,
  document.getElementById('container')
)
