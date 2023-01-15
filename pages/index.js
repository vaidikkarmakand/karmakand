import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from './about'
import { url } from './components/Data'
import { Adhyayan, Pooja } from './components/Poojan'
import Contact from './contact'

export default function Home() {
  return (
    <div className={`bg-gray`}>
      <div>
        <Head>
          <title>वैदिक कर्मकाण्ड</title>
        </Head>

        <main className='container-fluid' style={{ padding: "90px" }}>
          <h1 className={styles.title}>
            वैदिक कर्मकाण्ड
          </h1>

          {/* <p className={styles.description}>
            कर्मकाण्ड va अध्ययन kare saralta se
          </p> */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <a style={{ margin: "10px" }} href={`${url}/poojan`}><button type="submit" className="button-cool sm-w-full">कर्मकाण्ड</button></a>
            <a style={{ margin: "10px" }} href={`${url}/adhyayan`}><button type="submit" className="button-cool sm-w-full">अध्ययन</button></a>
          </div>
        </main>
        <div className="bg-white" style={{ padding: "50px 0" }}>
          <div className='container-fluid'>
            <Pooja />
            <Adhyayan />
          </div>
        </div>
        <About className='bg-gray' />
        <Contact />
      </div>
    </div>
  )
}
