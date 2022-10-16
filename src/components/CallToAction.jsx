import { React, useState } from 'react'
import { motion } from 'framer-motion'
import axios from "axios";
import styles from '@styles/CallToAction.module.css'

const text = [
    "¿Imaginas reducir tu huella ambiental con vegetales modernos?",
    "¡Haz parte de la revolución tecnológica!",
    "Quiero ser el primero"
]

const animateInView = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    inView: {
        opacity: 1,
        scale: 1,

        transition: {
            ease: [0, 0.71, 0.2, 1.01],
            duration: 0.8,
        }
    }
}

const CallToAction = () => {

    const [email, setEmail] = useState("")
    const [state, setState] = useState("IDLE")
    const [errorMessage, setErrorMessage] = useState(null)

    const subscribe = async () => {
        setState("LOADING");
        try {
            const response = await axios.post("/api/mail", { email });
            setState("SUCCESS")
            console.log(response)
        }
        catch (err) {
            setErrorMessage(err.response.data.error);
            setState("ERROR")
        }
    }

    return (
        <motion.div
            className={styles.CallToAction}
            initial="hidden"
            whileInView="inView"
            variants={animateInView}
            viewport={{ once: true }}

        >
            <h3>
                {text[0]}
            </h3>
            <p>
                {text[1]}
            </p>
            <div className={styles["Input-container"]}>
                <input
                    placeholder='example@email.com'
                    className={styles["CallToAction-input"]}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                />
                <motion.button
                    className={styles["CallToAction-button"]}
                    type="button"
                    disabled={state === "LOADING"}
                    onClick={subscribe}
                    whileHover={{
                        scale: 1.05,
                    }}
                >
                    {text[2]}

                </motion.button>

                {state === "ERROR" && (
                    <p id={styles["CTA-Errorresponse"]}>{errorMessage}</p>
                )}
                {state === "SUCCESS" && (
                    <p id={styles["CTA-Successresponse"]}>Gracias!, si quieres contactarnos tu mismo puedes hacerlo escribiendo a aippia@gmail.com</p>
                )}
            </div>


        </motion.div>
    )
}

export { CallToAction }