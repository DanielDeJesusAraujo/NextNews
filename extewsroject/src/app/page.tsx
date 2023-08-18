/* eslint-disable @next/next/no-img-element */
import styles from './page.module.css'
import IApiResponse from './interfaces/Inews'
import Header from './components/header'
import News from './components/news'
import Footer from './components/footer'


export default function Home() {
  return (
    <main className={styles.main}>
      <News />
    </main>
  )
}
