import React from "react";
import { Logo } from "./Logo";
import styles from "../styles/Navbar.module.css"
import { motion } from "framer-motion"; 

const text = [
    "Contactanos"
]

const onClickBottom = () => {
    window.scrollTo(0, document.body.clientHeight)
}


const Navbar = () => {
    return (
        <div className= {styles.Navbar} >
            <div id= {styles["logo-container"]} on>
                <Logo/>
            </div>
            
            <motion.button 
                id={styles["CTA-button"]}
                initial = {{
                    opacity:0,
                }}
                animate = {{
                    opacity:1,
                    transition: {
                        duration: 2,
                        delay: 2,
                }
                }}
                transition = {{
                    duration: 0.3,
                    delay: 0,
                    ease: "circOut"
                }}
                whileHover={{ 
                    scale: 1.05,
                }}
                onClick = {onClickBottom}
            >
                {text[0]}
            </motion.button>
            
        </div>
    )
}

export { Navbar }