import { Card } from "@components/Card";
import React from "react";
import styles from "@styles/Cards.module.css"

const text1 = [
    "Calidad",
    "Calidad nutricional que te ayuda a cuidar el medio ambiente.Más fácil de consumir y sin necesidad de lavarlos"
]
const text2 = [
    "Frescura",
    "Más frescos, mejor olor, color y sabor. Olvidate de vegetales contaminados, ten más confianza."
]
const text3 = [
    "Innovación",
    "Constuyes el futuro de la alimentación.Tecnología sostenible para ti y para todos."
]
const Cards = () => {

    return (
        <div className={styles.Cards}>
            <Card text = {text1}/>
            <Card text = {text2}/>
            <Card text = {text3}/>
        </div>
    )
}

export {Cards}