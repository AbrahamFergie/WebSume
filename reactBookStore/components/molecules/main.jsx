import React,{ Component } from 'react'
import { Link } from 'react-router'
import styles from '../style.css'

export default class Main extends Component{
  render(){
    return(
      <div className={styles.main}>{this.props.children}</div>
    )
  }
}
