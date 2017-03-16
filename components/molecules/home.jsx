import React,{ Component } from 'react'
import styles from '../style.css'

export default class Home extends Component{
  render(){
    return(
      <div>
        <div className={styles.home}><strong><u>Abraham Ferguson</u></strong><br></br><font size="5">Software Engineer Apprentice</font></div>
        <div className={styles.skills}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth felis boxing champion nigel mansell felis big daft brush godlike goose toothbrush village people mouth coiffure testosterone trophy. Professor plum helllloooo professor plum hello, we’re cockneys yosemite sam tache hungarian, helllloooo hello, we’re cockneys testosterone trophy professor plum yosemite sam hungarian hulk hogan andrew weatherall tache professor plum tache. Leonine movember waxy gurn I drink your milkshake kaiser bill.
        </div>
        <div className={styles.skills2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth felis boxing champion nigel mansell felis big daft brush godlike goose toothbrush village people mouth coiffure testosterone trophy.
        </div>
        <div className={styles.skills3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth felis boxing champion nigel mansell felis big daft brush godlike goose toothbrush village people mouth coiffure testosterone trophy.
        </div>
        <div className={styles.education}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth
        </div>
        <div className={styles.related}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Fox hunting gunslinger prostate cancer et pit fighter cappuccino catcher? Lemmy ned flanders middle eastern despot?
          Testosterone trophy nigel mansell boxing champion big daft brush village people, big daft brush felis testosterone trophy village people nigel mansell bruce forsyth godlike boxing champion, fox hunting bruce forsyth
        </div>
        <div className={styles.menu}>Projects:</div>
        <div className={styles.projects}><br></br><br></br>
          <div className={styles.carousel}>
            <div className={styles.cube}>
              <a
                href="https://github.com/AbrahamFergie/myBlackJack">
                <figure className={styles.front}><figcaption>Blackjack</figcaption></figure>
                <figure className={styles.back}><figcaption>Blackjack</figcaption></figure>
                <figure className={styles.right}><figcaption>Blackjack</figcaption></figure>
                <figure className={styles.left}><figcaption>Blackjack</figcaption></figure>
                <figure className={styles.top}><figcaption>Blackjack</figcaption></figure>
                <figure className={styles.bottom}><figcaption>Blackjack</figcaption></figure>
              </a>
            </div>
            <div className={styles.cube2}>
              <a href="https://github.com/AbrahamFergie/myBooky">
                <figure className={styles.front2}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.back2}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.right2}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.left2}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.top2}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.bottom2}><figcaption>Book Store</figcaption></figure>
              </a>
            </div>
            <div className={styles.cube3}>
              <a href="https://github.com/AbrahamFergie/myBlackJack">
                <figure className={styles.front3}><figcaption>BlackJack</figcaption></figure>
                <figure className={styles.back3}><figcaption>BlackJack</figcaption></figure>
                <figure className={styles.right3}><figcaption>BlackJack</figcaption></figure>
                <figure className={styles.left3}><figcaption>BlackJack</figcaption></figure>
                <figure className={styles.top3}><figcaption>BlackJack</figcaption></figure>
                <figure className={styles.bottom3}><figcaption>BlackJack</figcaption></figure>
              </a>
            </div>
            <div className={styles.cube4}>
              <a href="https://github.com/AbrahamFergie/myBooky">
                <figure className={styles.front4}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.back4}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.right4}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.left4}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.top4}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.bottom4}><figcaption>Book Store</figcaption></figure>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer}>React-Powered</div>
      </div>
    )
  }


}
