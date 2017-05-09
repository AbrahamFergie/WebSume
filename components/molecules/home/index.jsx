import React,{ Component } from 'react'

import "./styles.scss"

export default class Home extends Component{

  render(){
    return(
      <div>
        <div className="home"><strong><u>Abraham Ferguson</u></strong><br></br><font size="5">Software Engineer Apprentice</font></div>
        <div className="skills"><strong><u>Skills</u></strong><br></br>Lorem Khaled Ipsum is a major key to success. Let’s see what Chef Dee got that they don’t want us to eat. Stay focused. You smart, you loyal, you a genius. Fan luv. Stay focused. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Special cloth alert. In life there will be road blocks but we will over come it.

        The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. We don’t see them, we will never see them. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. I’m up to something. Another one. Learning is cool, but knowing is better, and I know the key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.</div>
        <div className="skills2"><strong><u>More Skills</u></strong></div>
        <div className="skills3"><strong><u>More Skills</u></strong></div>
        <div className="education"><strong><u>Wer Da Learnin Come Frum</u></strong></div>
        <div className="related"><strong><u>Previous Work</u></strong></div>
        <div className="menu">Projects:</div>
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
        <div className="footer">React-Powered</div>
      </div>
    )
  }


}
