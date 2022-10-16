import { Card } from "@components/Card";
import React from "react";
import { motion } from "framer-motion";
import styles from "@styles/Cards.module.css"

const text1 = [
    "Calidad",
    "Calidad nutricional que te ayuda a cuidar el medio ambiente.Más fácil de consumir y sin necesidad de lavarlos!"
]
const text2 = [
    "Frescura",
    "Más frescos, mejor olor, color y sabor. Olvidate de vegetales contaminados, ten más confianza."
]
const text3 = [
    "Innovación",
    "Constuyes el futuro de la alimentación.Tecnología sostenible para ti y para todos."
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
const Cards = () => {

    return (
        <motion.div
            className={styles.Cards}
            initial = "hidden"
            whileInView="inView"
            variants={animateInView}
            viewport={{once:true}}
        >
            <Card text = {text1} />
            <Card text = {text2} />
            <Card text = {text3} />
        </motion.div>
    )
}

export {Cards}