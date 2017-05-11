import React,{ Component } from 'react'
import { Link } from 'react-router'
import './styles.scss'

export default class Main extends Component{
  render(){
    return(
      
      <div className="main">{this.props.children}</div>
    )
  }


}
