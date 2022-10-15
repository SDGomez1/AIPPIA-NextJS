import React from 'react'
import styles from '@styles/ChangingWords.module.css'
import { motion } from 'framer-motion'

const title = "Agricultura Vertical es "
const words = [
    "un espacio cerrado para producción de vegetales con luz artificial.",
    "Mejor calidad Menos consumo de recursos y contaminación ambiental.",
    " Complemento agricultura convencional en la distribución y producción.",
    
]

const createWords = words.map((item,index) => {
    return <span className={styles.words} key ={index}>{item} </span>
})
    
const animationContainer = {
    hidden: {
        opacity:0
    },
    inView: {
        opacity:[0,1],
        
        transition: {
            ease: "easeInOut",
            bounce: 0,
            duration:1,
            times: [0.4 , 1],
            staggerChildren: 0.3,
            
        }
    },
}
const ChangingWords = () => {


    return(
        <motion.div 
            className={styles.ChangingWords}
            initial = {{
                opacity:0
            }}
            animate = {{
                opacity:1,
                transition: {
                    delay:2.5,
                    duration: 2
                }
            }}    
        >
            <h3 >{title}  </h3>
            <div className={styles.wrapper} > 
                {createWords}
            </div>
            <motion.div 
                className={styles["words-mobile"]}
                initial="hidden"
                whileInView = "inView"
                viewport={{once:true, amount:0.7}}
                variants = {animationContainer}
            >
                <motion.p variants = {animationContainer}> <strong id={styles["text-title-mobile"]} >{title}</strong> {words[0]}</motion.p>
                <motion.p variants = {animationContainer}> Mejor calidad <strong id={styles["text-title-mobile"]}>Menos consumo de recursos y contaminación ambiental.</strong></motion.p>
                <motion.p variants = {animationContainer}> <strong id={styles["text-title-mobile"]}>Complemento de la agricultura</strong> convencional en la distribución y producción.</motion.p>
            </motion.div>

        </motion.div>
    )
}

export {ChangingWords}