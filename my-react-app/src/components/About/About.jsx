import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/KDHR.png")} alt="The about images" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="icon of cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p className={styles.sentence}>
                        I'm a front-end developer skilled in HTML, CSS, JavaScript, and React, dedicated to creating dynamic and responsive web applications.
                        </p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="icon of server" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus voluptate accusantium, laudantium perspiciatis similique?
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="icon of uni" />
                    <div className={styles.aboutItemText}>
                        <h3>Fullstrack Developer</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus voluptate accusantium, laudantium perspiciatis similique?
                        </p>
                    </div>
                </li> */}
            </ul>
        </div>
    </section>
  )
}

export default About
