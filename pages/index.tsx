import Head from 'next/head'
import Image from 'next/image'
import { Courier_Prime } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import w3o from '/public/w3o.png'
import Spline from '@splinetool/react-spline'


const inter = Courier_Prime({ subsets: ['latin'],weight:"400"})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        
        <div className={styles.pic}>
        <Spline scene="https://prod.spline.design/SeC6Ey20rYJMYrR1/scene.splinecode" />
        </div>

        <div className={styles.sub}>
        <form>
        <Image
        src = "/w3o.png"
        width={300}
        height={300}
        alt='logo'
        ></Image>
        <h1 id={styles.id}>
          Subscribe to our newsletter
          <br></br>
          📰📰📰
        </h1>
        <label>
          Enter your email address:
        </label>
          <input type='Email'></input>
          
          <button type='button'><span></span>Subscribe</button> 
        </form>
        

        </div>
      </main>
    </>
  )
}
