import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Della2 from '@/components/della2'
import { useEffect } from 'react'
import { Settings } from '@/components/settings'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const settings = new Settings();
   
  
  return (
    <>
      <Head>
        <title>{settings.getTitle()}</title>
        <meta name="description" content={settings.getDescription()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         <div className={styles.card}>{settings.getDescription()}</div>
         <Della2/>
      </main>
    </>
  )
}
