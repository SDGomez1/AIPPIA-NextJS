import React from 'react'
import { motion } from 'framer-motion'
import styles from '@styles/Hero.module.css'
import Image from 'next/image'
import Ambient from '@imgs/Ambiente Controlado.jpg'

const text = [
    "¿Conoces la nueva forma de producir vegetales?  Entérate cómo y de sus beneficios"
    
]

const animation = {
    hidden: {
        opacity: 0
    },
    inView: {
        opacity:1,
        transition: {
            duration:2,
            delay:2
        }
    }
}

const Hero = () => {

    return (
        <motion.section 
            className={styles.Hero} 
            initial = "hidden"
            animate = "inView"
            variants={animation}
        >
            <div className={styles["Hero-container"]}>
                <h1 id= {styles["Hero-title"]}> {text[0]}</h1>
            </div>
            <div className={styles["Hero-container"]}>
                <div id={styles["Hero-img"]}>
                    <Image src={Ambient} layout="fixed" height="500px" alt = "image"/>
                </div>
            </div>

        </motion.section>
    )
}

export {Hero}