import { Hero } from '@components/Hero';
import { Fragment } from 'react';
import { HowItWorks } from '@templates/HowItWorks';
import { Navbar } from '../components/Navbar';
import { ChangingWords } from '@components/ChagingWords';
import { Cards } from '@templates/Cards';
import { CallToAction } from '@components/CallToAction';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>AIPPIA | MainPage</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D2F5BK5KT0" />
      <Script id="google-analytics" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-D2F5BK5KT0');`}
      </Script>

      <Navbar />
      <Hero />
      <ChangingWords />
      <HowItWorks />
      <Cards />
      <CallToAction />
    </Fragment>
  );
}
