import React from "react";
import { motion } from "framer-motion";
import styles from '@styles/ProcessLayoutLeft.module.css'


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

const ProcessLayoutLeft = (props) => {
    const listText = props.listText;
    const text = props.text;
    
    const GenerateListText = listText.map ((item, index) => {
        return (
            <motion.div 
                className={styles.bulletTextContainer} 
                key = {index} 
                variants = {animationContainer}
            >
                <motion.div 
                className={styles.circle} 
                key = {index+1} 
                variants = {animationContainer}
                />

                <motion.p 
                key = {index+2}
                className={styles.bulletText}
                variants = {animationContainer}
                >
                    {item}
                </motion.p>
            </motion.div>
        )
    })
    return (
        <motion.div 
            className={styles.ProcessLayoutLeft}
            initial="hidden"
            whileInView = "inView"
            viewport={{once:true}}
            variants = {animationContainer}
            >

            <motion.div 
                className={styles["ProcessLayoutLeft-text-container"]}
                variants = {animationContainer}

            >
                <motion.h4
                    variants = {animationContainer}
                >
                    {text[0]}
                </motion.h4>

                <motion.p
                    variants = {animationContainer}
                >
                    {text[1]}
                </motion.p>

                {GenerateListText}

            </motion.div>

            <motion.div className={styles["ProcessLayoutLeft-img"]}>
            </motion.div>


        </motion.div>

    )
}

export { ProcessLayoutLeft }