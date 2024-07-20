import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sofiya</h1>
            <h1 className={styles.titlejob}>Frontend Developer</h1>
            <p className={styles.description}>
            Make it work, make it right, make it fast.
            </p>
            <a href="mailto:somfiya214@gmail.com" className={styles.contectBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/DJVN.png")} alt="Hero Images of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.buttomBlur}></div>
    </section>
  )
}

export default Hero
