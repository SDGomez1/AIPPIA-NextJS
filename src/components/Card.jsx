import React from "react";
import { motion } from "framer-motion";
import styles from "@styles/Card.module.css"
const Card = (props) => {
    const text = props.text
    return (
        <motion.div 
            className={styles.Card}
            
        >
            <h4 id= {styles["card-title"]}>
                {text[0]}
            </h4>
            <p id= {styles["card-text"]}>
                {text[1]}
            </p>
        </motion.div>
    )
}
export {Card}