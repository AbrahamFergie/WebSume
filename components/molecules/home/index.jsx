import React,{ Component } from 'react'

import NavBar from "../nav/index.jsx"
import Header from "../header/index.jsx"
import Footer from "../footer/index.jsx"
import "./styles.scss"

export default class Home extends Component{

  render(){
    let footerName = 'footer-home'
    let navBttn1 = 'navButton1-home', navBttn2 = 'navButton2-home', navBttn3 = 'navButton3-home', navBttn4 = 'navButton4-home'

    return(
      <div>
        <Header />
        <NavBar navButton1={navBttn1} navButton2={navBttn2} navButton3={navBttn3} navButton4={navBttn4}/>
        <div className="menu">Projects</div>
        <div className="projects"><br></br><br></br>
          <div className="carousel">
            <div className="cube">
              <a target="_blank"
                href="https://github.com/AbrahamFergie/myBlackJack">
                <figure className="front"><figcaption>Blackjack</figcaption></figure>
                <figure className="back"><figcaption>Blackjack</figcaption></figure>
                <figure className="right"><figcaption>Blackjack</figcaption></figure>
                <figure className="left"><figcaption>Blackjack</figcaption></figure>
                <figure className="top"><figcaption>Blackjack</figcaption></figure>
                <figure className="bottom"><figcaption>Blackjack</figcaption></figure>
              </a>
            </div>
            <div className="cube2">
              <a target="_blank" href="https://github.com/AbrahamFergie/myBooky">
                <figure className="front2"><figcaption>Book Store</figcaption></figure>
                <figure className="back2"><figcaption>Book Store</figcaption></figure>
                <figure className="right2"><figcaption>Book Store</figcaption></figure>
                <figure className="left2"><figcaption>Book Store</figcaption></figure>
                <figure className="top2"><figcaption>Book Store</figcaption></figure>
                <figure className="bottom2"><figcaption>Book Store</figcaption></figure>
              </a>
            </div>
            <div className="cube3">
              <a target="_blank" href="https://github.com/AbrahamFergie/myBlackJack">
                <figure className="front3"><figcaption>BlackJack</figcaption></figure>
                <figure className="back3"><figcaption>BlackJack</figcaption></figure>
                <figure className="right3"><figcaption>BlackJack</figcaption></figure>
                <figure className="left3"><figcaption>BlackJack</figcaption></figure>
                <figure className="top3"><figcaption>BlackJack</figcaption></figure>
                <figure className="bottom3"><figcaption>BlackJack</figcaption></figure>
              </a>
            </div>
            <div className="cube4">
              <a target="_blank" href="https://github.com/AbrahamFergie/myBooky">
                <figure className="front4"><figcaption>Book Store</figcaption></figure>
                <figure className="back4"><figcaption>Book Store</figcaption></figure>
                <figure className="right4"><figcaption>Book Store</figcaption></figure>
                <figure className="left4"><figcaption>Book Store</figcaption></figure>
                <figure className="top4"><figcaption>Book Store</figcaption></figure>
                <figure className="bottom4"><figcaption>Book Store</figcaption></figure>
              </a>
            </div>
          </div>
        </div>
        <Footer name={footerName}/>
      </div>
    )
  }


}
