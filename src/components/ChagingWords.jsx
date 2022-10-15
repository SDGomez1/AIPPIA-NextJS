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

        </motion.div>
    )
}

export {ChangingWords}