import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import styles from '@styles/ProcessLayoutRigth.module.css';
      
  const animationContainer = {
    hidden: {
        opacity:0
    },
    inView: {
        opacity:[0,1],
        transition: {
            duration:1,
            times: [0.4 , 1],
            staggerChildren: 0.3,
        }
    },
}



const ProcessLayoutRigth = (props) => {
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
            className={styles.ProcessLayoutRigth}
            initial="hidden"
            whileInView = "inView"
            variants = {{animationContainer}}
            viewport={{once:true}}
        >
            <motion.div 
                className={styles["ProcessLayoutRigth-img"]} 
                variants = {animationContainer}
            >
                <Image src={props.source}/>
            </motion.div>

            <motion.div 
                className={styles["ProcessLayoutRigth-text-container"]}  
                variants = {animationContainer}
            >
                <motion.h4 variants = {animationContainer}>
                    {text[0]}
                </motion.h4 >

                <motion.p variants = {animationContainer}>
                    {text[1]}
                </motion.p>

                {GenerateListText}

            </motion.div>


        </motion.div>

    )
}

export { ProcessLayoutRigth }