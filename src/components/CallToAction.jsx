import React from 'react'
import { motion } from 'framer-motion'
import styles from '@styles/CallToAction.module.css'

const text = [
    "¿Imaginas reducir tu huella ambiental con vegetales modernos?",
    "¡Haz parte de la revolución tecnológica!",
    "Quiero ser el primero"
]

const animateInView = {
    hidden: {
        opacity:0,
        scale: 0.5
    },
    inView: {
        opacity:1,
        scale:1,
        
        transition: {
            ease: [0, 0.71, 0.2, 1.01],
             duration: 0.8,
        }
    }
}

const CallToAction = () => {

    return(
        <motion.div 
            className={styles.CallToAction}
            initial = "hidden"
            whileInView="inView"
            variants={animateInView}
            viewport={{once:true}}
                
        >
            <h3>
                {text[0]}
            </h3>
            <p>
                {text[1]}
            </p>
            <div>
                <input placeholder='example@email.com' className={styles["CallToAction-input"]}></input>
                <motion.button 
                    className={styles["CallToAction-button"]}
                    whileHover={{ 
                        scale: 1.05,
                    }}
                >
                    {text[2]}
                
                </motion.button>
            </div>


        </motion.div>
    )
}

export {CallToAction}