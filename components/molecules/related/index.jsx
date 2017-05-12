import React,{ Component } from 'react'

import NavBar from "../nav/index.jsx"
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import './styles.scss'

export default class Related extends Component{
  render(){
    let footerName = 'footer-related'
    let navBttn1 = 'navButton1-related', navBttn2 = 'navButton2-related', navBttn3 = 'navButton3-related', navBttn4 = 'navButton4-related'
    return(
      <div>
        <Header />
        <NavBar navButton1={navBttn1} navButton2={navBttn2} navButton3={navBttn3} navButton4={navBttn4}/>
        <div className="related"><strong><u>Previous Work</u></strong></div>
        <Footer name={footerName}/>
      </div>
    )
  }
}
