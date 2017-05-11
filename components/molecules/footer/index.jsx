import React, { Component } from "react"

import "./styles.scss"

export default class Footer extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className={this.props.name}>React-Powered</div>
    )
  }
}
