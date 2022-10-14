import React from 'react'
import { ProcessLayoutRigth } from '@components/ProcessLayoutRigth'
import styles from '@styles/HowItWorks.module.css'
import { ProcessLayoutLeft } from '@components/ProcessLayoutLeft'

const text1 = [
    "Todo empieza en nuestras Intalaciones",
    "Nos ubicamos dentro de la ciudad, Aqui tenemos intalaciones equipadas con todo lo necesacio para realizar los mejores cultivos."
]

const listText1 = [
    "No tenemos que abrir nuevas tierras para cultivar",
    "Evitamos contaminar impidiendo que tu alimento viaje del campo a la ciudad"
]

const text2 = [
    "Seleccionamos las mejores semillas",
    "Nuestro sistema nos permite proteger a la planta de las adversidades externas, eso nos permite escoger semillas organicas"
]

const listText2 = [
    "No usamos semillas GMO",
    "Orgnicas producidas localmente"
]

const text3 = [
    "Crecen en un ambiente protegido",
    "Cada planta recibe lo que necesita para crecer de la mejor forma. Y lo hace libre de peligros"
]

const listText3 = [
    "Cada gota de agua se va directamente a la planta, no tenemos desperdicios",
    "El ambiente protegido evita que tengamos que utilizar pesticidas u alguna otra sustancia peligrosa",
    "Cada planta recibe luz, temperatura, y alimento optimo."

]


const text4 = [
    "Esperamos el mejor momento para darte el mejor alimento",
    "Nuestros sistemas nos permiten conocer cuando es el mejor momento para cosecharlas."
]

const listText4 = [
    "Recibes alimentos más frescos que nunca, cosechadas el mismo dia que lo recibes",
    "Cada planta que entregamos tiene mayor sabor, y es más saludable. ",
    "Alimentate de forma tranquila, puedes estar seguro que tu producto esta libre de quimicos"

]
const HowItWorks = () => {

    return (
        <section>
            <h2 id={styles["HowItWorks-title"]}> ¿como Funciona?</h2>
            <ProcessLayoutRigth listText={listText1} text={text1} />
            <span>
            <ProcessLayoutLeft listText={listText2} text={text2}/>
            </span>
            <div id={styles["HowItWorks-section"]}>
                <ProcessLayoutRigth listText={listText3} text={text3}/>
                <ProcessLayoutLeft listText={listText4} text={text4}/>
            </div>
        </section>
    )
}

export { HowItWorks }