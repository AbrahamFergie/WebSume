import React,{ Component } from 'react'
import styles from './style.css'
import './styler.scss'

export default class Home extends Component{

  render(){
    return(
      <div>
        <div className={styles.home}><strong><u>Abraham Ferguson</u></strong><br></br><font size="5">Software Engineer Apprentice</font></div>
        <div className={styles.skills}><strong><u>Skills</u></strong><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth felis boxing champion nigel mansell felis big daft brush godlike goose toothbrush village people mouth coiffure testosterone trophy. Professor plum helllloooo professor plum hello, we’re cockneys yosemite sam tache hungarian, helllloooo hello, we’re cockneys testosterone trophy professor plum yosemite sam hungarian hulk hogan andrew weatherall tache professor plum tache. Leonine movember waxy gurn I drink your milkshake kaiser bill.
        </div>
        <div className={styles.skills2}><strong><u>More Skills</u></strong><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth felis boxing champion nigel mansell felis big daft brush godlike goose toothbrush village people mouth coiffure testosterone trophy.
        </div>
        <div className={styles.skills3}><strong><u>More Skills</u></strong><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth felis boxing champion nigel mansell felis big daft brush godlike goose toothbrush village people mouth coiffure testosterone trophy.
        </div>
        <div className={styles.education}><strong><u>Wer Da Learnin Come Frum</u></strong><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth
        </div>
        <div className={styles.related}><strong><u>Possible Relevant Wrevious Work History</u></strong><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth
        </div>
        <div className={styles.menu}>Projects:</div>
        <div className={styles.projects}><br></br><br></br>
          <div className={styles.carousel}>
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
        <div className={styles.footer}>React-Powered</div>
      </div>
    )
  }


}
