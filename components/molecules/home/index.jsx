import React,{ Component } from 'react'

import "./styles.scss"

export default class Home extends Component{

  render(){
    return(
      <div>
        <div className="home"><strong><u>Abraham Ferguson</u></strong><br></br><font size="5">Software Engineer Apprentice</font></div>
        <div className="skills"><strong><u>Skills</u></strong></div>
        <div className="skills2"><strong><u>More Skills</u></strong></div>
        <div className="skills3"><strong><u>More Skills</u></strong></div>
        <div className="education"><strong><u>Wer Da Learnin Come Frum</u></strong></div>
        <div className="related"><strong><u>Previous Work</u></strong></div>
        <div className="menu">Projects:</div>
        <div className="projects"><br></br><br></br>
          <div className="carousel">
            <div className="cube">
              <a
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
              <a href="https://github.com/AbrahamFergie/myBooky">
                <figure className="front2"><figcaption>Book Store</figcaption></figure>
                <figure className="back2"><figcaption>Book Store</figcaption></figure>
                <figure className="right2"><figcaption>Book Store</figcaption></figure>
                <figure className="left2"><figcaption>Book Store</figcaption></figure>
                <figure className="top2"><figcaption>Book Store</figcaption></figure>
                <figure className="bottom2"><figcaption>Book Store</figcaption></figure>
              </a>
            </div>
            <div className="cube3">
              <a href="https://github.com/AbrahamFergie/myBlackJack">
                <figure className="front3"><figcaption>BlackJack</figcaption></figure>
                <figure className="back3"><figcaption>BlackJack</figcaption></figure>
                <figure className="right3"><figcaption>BlackJack</figcaption></figure>
                <figure className="left3"><figcaption>BlackJack</figcaption></figure>
                <figure className="top3"><figcaption>BlackJack</figcaption></figure>
                <figure className="bottom3"><figcaption>BlackJack</figcaption></figure>
              </a>
            </div>
            <div className="cube4">
              <a href="https://github.com/AbrahamFergie/myBooky">
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
        <div className="footer">React-Powered</div>
      </div>
    )
  }


}
