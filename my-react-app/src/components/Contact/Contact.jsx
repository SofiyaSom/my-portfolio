import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="the email icon" />
                <a href="mailto:somfiyaso@gmail.com">somfiyaso@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="the linkedin icon" />
                <a href="https://www.linkedin.com/in/sofiya-som-36794a285/" target="_blank" rel="noopener noreferrer">linkedin.com/SofiyaSom</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="the github icon" />
                <a href="https://github.com/SofiyaSom" target="_blank" rel="noopener noreferrer">github.com/SofiyaSom</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
