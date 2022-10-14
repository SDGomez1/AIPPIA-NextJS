import React from 'react'
import styles from '@styles/Snap.module.css'
import { motion, Variants } from "framer-motion";
import { useInView  } from 'react-intersection-observer';



const Snap = () => {
 
    const { ref:wat, inView, entry } = useInView({
        threshold:0.97,
      })

    
    return (
        <motion.div className={`${styles.Snap} ${inView ? styles.Scrolling : ''}`} ref = {wat} >
            <motion.section className ={styles["Snap-section"]}  id = {styles["Snap-first-container"]}
            initial= {{
                backgroundColor: "#000000"
            }}
            whileInView={{
                backgroundColor: ["#000000","#FF616B"],
                transition: {
                    duration: 1
                }
            }}
            viewport={{ once: true, amount: 0.8 }}
            
            >
                <h3>
                    Paga 1
                </h3>
            </motion.section>
            <motion.section className ={styles["Snap-section"]} id = {styles["Snap-second-container"]}
            initial= {{
                backgroundColor: "#FF616B"
            }}
            whileInView={{
                backgroundColor: ["#FF616B","#2EE3FF"],
                transition: {
                    duration: 1
                }
            }}
            viewport={{ once: true, amount: 0.8 }}
            
            >
                <h3>
                    Paga2
                </h3>
            </motion.section>
            <motion.section className ={styles["Snap-section"]} id = {styles["Snap-third-container"]} style = "background-color: white;"
            initial= {{
                backgroundColor: "#2EE3FF"
            }}
            whileInView={{
                backgroundColor: ["#2EE3FF","#FAD81F"],
                transition: {
                    duration: 1
                }
            }}
            viewport={{ once: true, amount: 0.8 }}
            
            >
                <h3>
                    Paga3
                </h3>
            </motion.section>
        </motion.div>
    )
}

export {Snap}