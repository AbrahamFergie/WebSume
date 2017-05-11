import React,{ Component } from 'react'

import NavBar from "../nav/index.jsx"
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import './styles.scss'

export default class Education extends Component{
  render(){
    let footerName = 'footer-education'
    let navBttn1 = 'navButton1-education', navBttn2 = 'navButton2-education', navBttn3 = 'navButton3-education', navBttn4 = 'navButton4-education'

    return(
      <div>
        <Header />
        <NavBar navButton1={navBttn1} navButton2={navBttn2} navButton3={navBttn3} navButton4={navBttn4}/>
        <div className="education"><strong><u>Wer Da Learnin Come Frum</u></strong></div>
        <Footer name={footerName}/>
      </div>
    )
  }
}
