import React,{ Component } from 'react'

import NavBar from "../nav/index.jsx"
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import './styles.scss'

export default class Skills extends Component{
  render(){
    let footerName = 'footer-skills'
    let navBttn1 = 'navButton1-skills', navBttn2 = 'navButton2-skills', navBttn3 = 'navButton3-skills', navBttn4 = 'navButton4-skills'

    return(
      <div>
        <Header />
        <NavBar navButton1={navBttn1} navButton2={navBttn2} navButton3={navBttn3}navButton4={navBttn4}/>

        <h1 className="skills-header">This Is The Skills Page</h1>
        <div className="skills">
          <strong><u>Skills</u></strong><br></br>Lorem Khaled Ipsum is a major key to success. Let’s see what Chef Dee got that they don’t want us to eat. Stay focused. You smart, you loyal, you a genius. Fan luv. Stay focused. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Special cloth alert. In life there will be road blocks but we will over come it.

          The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. We don’t see them, we will never see them. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. I’m up to something. Another one. Learning is cool, but knowing is better, and I know the key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.
        </div>
        <div className="skills2"><strong><u>More Skills</u></strong></div>
        <div className="skills3"><strong><u>More Skills</u></strong></div>
        <Footer name={footerName}/>
      </div>
    )
  }
}
