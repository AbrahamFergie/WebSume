import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export default class NavBar extends Component {
  constructor(props){
    super(props)
  }
  animateButton(navButton){

    let btn = document.querySelector(`.${navButton}`)

    btn.classList.add('clicked')

    setTimeout(() => {btn.classList.remove('clicked')}, 100)
  }
  render(){
    return(
      <div className="nav">
        <div onClick={() => {this.animateButton(`${this.props.navButton1}`)}}><Link  className={this.props.navButton1} to="/">Home</Link></div>
        <div onClick={() => {this.animateButton(`${this.props.navButton2}`)}}><Link  className={this.props.navButton2} to="/skills">Skills</Link></div>
        <div onClick={() => {this.animateButton(`${this.props.navButton3}`)}}><Link  className={this.props.navButton3} to="/related">Work History</Link> </div>
        <div onClick={() => {this.animateButton(`${this.props.navButton4}`)}}><Link  className={this.props.navButton4} to="/education">Education</Link></div>
      </div>
    )
  }
}
