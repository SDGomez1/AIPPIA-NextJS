import React from 'react'
import { ProcessLayoutRigth } from '@components/ProcessLayoutRigth'
import styles from '@styles/HowItWorks.module.css'
import { ProcessLayoutLeft } from '@components/ProcessLayoutLeft'
import plantRack from '@imgs/plantsRack.jpg'
import seeds from '@imgs/seeds.jpg'
import hydroponic from '@imgs/hydroponic.jpg'
import produce from '@imgs/greenProduce.jpg'
const text1 = [
    "Todo empieza en nuestras instalaciones",
    "Tenemos instalaciones dentro de la ciudad, aquí tenemos lo necesario para tener los mejores cultivos."
]

const listText1 = [
    "No deforestamos ni necesitamos de nuevas tierras para cultivar.",
    "Evitamos contaminar impidiendo que tu alimento viaje del campo a la ciudad."
]

const text2 = [
    "Seleccionamos las mejores semillas",
    "Al ser un espacio cerrado protegemos a la planta de las adversidades externas, eso nos permite escoger semillas orgánicas."
]

const listText2 = [
    "No usamos semillas GMO.",
    "Semillas orgánicas y producidas localmente."
]

const text3 = [
    "Vegetales 100% naturales y ecológico",
    "Cada planta recibe lo que necesita para crecer en las mejores condiciones para su desarrollo."
]

const listText3 = [
    "Cada gota de agua se va directamente a la planta, no tenemos desperdicios.",
    "El ambiente protegido evita que tengamos que utilizar pesticidas u alguna otra sustancia peligrosa para la salud y el amiente.",
    "Cada planta recibe luz, temperatura, y alimento optimo."

]

const text4 = [
    "La alimentación no tiene límites",
    "Nuestro sistemas nos permiten conocer cuando es el mejor momento para cosechar."
]

const listText4 = [
    "Recibes alimentos más frescos que nunca, cosechados el mismo día.",
    "Cada planta es más saludable y tiene mayor sabor.",
    "Aliméntate de forma tranquila, puedes estar seguro de que tu producto está libre de químicos.",
    "Producción de vegetales ilimitado, es posible alimentar a todos sin la preocupación de factores externos que afecten la cosecha."

]
const HowItWorks = () => {

    return (
        <section>
            <h2 id={styles["HowItWorks-title"]}> ¿Como funciona?</h2>
            <ProcessLayoutRigth listText={listText1} text={text1} source={plantRack} />
            <span>
            <ProcessLayoutLeft listText={listText2} text={text2} source={seeds}/>
            </span>
            <div id={styles["HowItWorks-section"]}>
                <ProcessLayoutRigth listText={listText3} text={text3} source={hydroponic}/>
                <ProcessLayoutLeft listText={listText4} text={text4} source= {produce}/>
            </div>
        </section>
    )
}

export { HowItWorks }