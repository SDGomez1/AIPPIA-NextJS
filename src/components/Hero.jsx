import React from 'react'
import { motion, Variants } from 'framer-motion'
import styles from '@styles/Hero.module.css'
import Image from 'next/image'
import Ambient from '@imgs/Ambiente Controlado.jpg'

const text = [
    "Se parte de la nueva generación de vegetales amigables con el medio ambiente"
]

const animation = {
    hidden: {
        opacity: 0
    },
    inView: {
        opacity:1,
        backgroundColor: "#1F8429",
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
                    <Image src={Ambient} layout="fixed" height="500px"/>
                </div>
            </div>

        </motion.section>
    )
}

export {Hero}