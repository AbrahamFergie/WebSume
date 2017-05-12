import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

import NavBar from "../nav/index.jsx"
import Header from "../header/index.jsx"
import Footer from "../footer/index.jsx"

import "./styles.scss"

export default class Home extends Component{
  // <div className="col-md-4">
  // </div>
  render(){
    let footerName = 'footer-home'
    let navBttn1 = 'navButton1-home', navBttn2 = 'navButton2-home', navBttn3 = 'navButton3-home', navBttn4 = 'navButton4-home'

    return(
      <div className="text-md-center">
        <Header />
        <div className="row text-center lead">
          <div className="link">
            <div>
              <Link className="paint" to="/skills">Bio-Page</Link>
            </div>
          </div>
          <div className="col-md-4">
            <a className="paint" target="_blank" href="https://github.com/AbrahamFergie">
              <br></br>My Github Profile:  github.com/AbrahamFergie<br></br><br></br></a>
          </div>
          <div className="linkedin">
            <a className="paint" target="_blank" href="https://www.linkedin.com/in/abraham-ferguson-971077117/">LinkedIn Profile</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 paint">
            <img className="img-responsive img-rounded img-border-2" src="https://cloud.githubusercontent.com/assets/15825329/25975569/eb3eab02-3663-11e7-9578-18cb77d7ecff.png"></img>
            &nbsp;This is My BlackJack game that lets you place bets against the house
            <a className="paint" target="_blank"
              href="https://github.com/AbrahamFergie/myBlackJack">

              <br></br>&nbsp;Click Me To See The Repo</a>
          </div>
          <div className="col-md-4 paint">
            <img className="img-responsive img-rounded" src="https://cloud.githubusercontent.com/assets/15825329/25976719/97058e72-366b-11e7-8599-2b8c2e16311b.png"></img>
            <img className="img-responsive img-rounded" src="https://cloud.githubusercontent.com/assets/15825329/25976694/6a2b2754-366b-11e7-8c7a-37276cf6eb85.png"></img>
            This is My Bookstore app that lets you search add and explore the books found in the attached database
            <a className="paint" target="_blank"
              href="https://github.com/AbrahamFergie/myBooky">

              <br></br>Click Me To See The Repo</a>
          </div>
          <div className="col-md-4 paint">
            <img className="img-rounded img-responsive" src="https://ancientbeast.com/images/AncientBeast.png"></img>
            This is a pull request I did for the OSS game AncientBeast<br></br>
            <a className="paint" target="_blank" href="https://github.com/AbrahamFergie/AncientBeast/pull/1"><br></br>Click Me To See The Repo</a><br></br><br></br><br></br><br></br>

            <img className="img-rounded img-responsive" src="https://img.pr0gramm.com/2015/10/26/25d3757fb55f0b14.jpg"></img>
            This is a pull request I did for the OSS app Prrr<br></br>
          <a className="paint" target="_blank" href="https://github.com/GuildCrafts/prrr/pull/136"><br></br>Click Me To See The Repo</a>

          </div>
        </div>
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
