import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

import NavBar from "../nav/index.jsx"
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import './styles.scss'

export default class Skills extends Component{
  render(){
    let footerName = 'footer-skills'
    let navBttn1 = 'navButton1-skills', navBttn2 = 'navButton2-skills', navBttn3 = 'navButton3-skills', navBttn4 = 'navButton4-skills'

    return(
      <div className="bg-primary">
        <Header />
        <div className="row">
          <div className="col-md-4"><Link className="link-s" to="/">HomePage</Link></div>
          <div className="align-center col-sm-4">
            <br></br><img className="img-responsive img-circle" src="https://cloud.githubusercontent.com/assets/15825329/26007049/c461b3cc-36f3-11e7-88f5-e57ae5132a4d.jpg"></img>
            <h3 className="border-1">Hello I'm Abraham! Thank you for stopping by! I typically use Atom as my text editor, my most proficient language is javascript, Html, React,Webpack, Babel, SQL and python as well.</h3>
          </div>
        </div>
        <Footer name={footerName}/>
      </div>
    )
  }
}
