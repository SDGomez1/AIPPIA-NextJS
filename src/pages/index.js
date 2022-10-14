
import { Hero } from '@components/Hero'
import { Fragment } from 'react'
import { HowItWorks } from '@templates/HowItWorks'
import { Navbar } from '../components/Navbar'
import { ChangingWords } from '@components/ChagingWords'
import { Card } from '@components/Card'
import { Cards } from '@templates/Cards'



export default function Home() {
  return (
    <Fragment>
      <Navbar/> 
      <Hero/>
      <ChangingWords/>
      <HowItWorks/>
      <Cards/>
    </Fragment>
  )
}
