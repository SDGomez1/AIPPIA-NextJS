import React from 'react'
import styles from '@styles/ChangingWords.module.css'

const title = "Agricultura Vertical es "
const words = [
    "un espacio cerrado para producción de vegetales con luz artificial.",
    "Mejor calidad Menos consumo de recursos y contaminación ambiental.",
    "Agricultura vertical, Complemento agricultura convencional en la distribución y producción.",
    
]

const createWords = words.map((item,index) => {
    return <span className={styles.words} key ={index}>{item} </span>
})
    

const ChangingWords = () => {


    return(
        <div className={styles.ChangingWords}>
            <h3 >{title}  </h3>
            <div className={styles.wrapper} > 
                {createWords}
            </div>

        </div>
    )
}

export {ChangingWords}