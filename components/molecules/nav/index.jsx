import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export default class NavBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="nav">
        <div><Link  className={this.props.navButton1} to="/">Home</Link></div>
        <div><Link  className={this.props.navButton2} to="/skills">Skills</Link></div>
        <div><Link  className={this.props.navButton3} to="/related">Work History</Link></div>
        <div><Link  className={this.props.navButton4} to="/education">Education</Link></div>
      </div>
    )
  }
}
