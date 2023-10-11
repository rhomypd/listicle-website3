import Image from 'next/image'
import styles from './page.module.css'
import Header from './../components/Header'

export default function Home() {

  const headerActions = [
    {
      title: 'About'
    },
    {
      title: 'Features'
    },
    {
      title: 'Pricing'
    },
    {
      title: 'Testimonials'
    },
  ]

  return (
    <main className={styles.main}>
       <Header actions={headerActions}  /> 
       
    oke
      
    </main>
  )
}
