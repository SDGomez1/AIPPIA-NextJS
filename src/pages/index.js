
import { Hero } from '@components/Hero'
import { Fragment } from 'react'
import { HowItWorks } from '@templates/HowItWorks'
import { Navbar } from '../components/Navbar'
import { Snap } from '@components/Snap'
import { ChangingWords } from '@components/ChagingWords'



export default function Home() {
  return (
    <Fragment>
      <Navbar/> 
      <Hero/>
      <ChangingWords/>
      <Snap></Snap>
    </Fragment>
  )
}
