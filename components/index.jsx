import React,{ Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './molecules/home/index.jsx'
import Main from './molecules/main/index.jsx'
import Skills from './molecules/skills/index.jsx'
import Education from './molecules/education/index.jsx'
import Related from './molecules/related/index.jsx'

render(
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/education" component={Education}/>
        <Route path="/related" component={Related}/>
      </Switch>
    </Main>
  </BrowserRouter>,
  document.getElementById('container')
)
