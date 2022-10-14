import React from 'react'

import styles from '@styles/HowItWorks.module.css'

const text = [
    "¿Como Funciona?"
  ]

const HowItWorks = () => {
   
    return (
        <section>
            <h2 id = {styles["HowItWorks-title"]}> {text[0]}</h2>
            


        </section>
    )
}

export {HowItWorks}