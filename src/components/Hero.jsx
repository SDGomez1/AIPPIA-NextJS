import React from 'react'
import styles from '@styles/Hero.module.css'

const text = [
    "Se parte de la nueva generación de vegetales amigables con el medio ambiente"
]

const Hero = () => {

    return (
        <section className={styles.Hero}>
            <div className={styles["Hero-container"]}>
                <h1 id= {styles["Hero-title"]}> {text[0]}</h1>
            </div>
            <div className={styles["Hero-container"]}>
                <div id={styles["Hero-img"]}>

                </div>
            </div>

        </section>
    )
}

export {Hero}