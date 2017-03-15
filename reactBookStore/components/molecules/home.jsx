import React,{ Component } from 'react'
import styles from '../style.css'

export default class Home extends Component{
  render(){
    return(
      <div>
        <div className={styles.home}>Home</div>
        <div className={styles.menu}>My Projects:</div>
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
              <a href="https://github.com/AbrahamFergie/myBooky">
                <figure className={styles.front3}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.back3}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.right3}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.left3}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.top3}><figcaption>Book Store</figcaption></figure>
                <figure className={styles.bottom3}><figcaption>Book Store</figcaption></figure>
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
      </div>
    )
  }
}
