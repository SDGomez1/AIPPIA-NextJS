import React from "react";
import styles from "@styles/Card.module.css"
const Card = (props) => {
    const text = props.text
    return (
        <div className={styles.Card}>
            <h4 id= {styles["card-title"]}>
                {text[0]}
            </h4>
            <p id= {styles["card-text"]}>
                {text[1]}
            </p>
        </div>
    )
}
export {Card}