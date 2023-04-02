
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'
import Section1 from '../components/section1'
import Section2 from '../components/section2'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
       <Header></Header>
       <main>
       <Section1></Section1>
       <Section2></Section2>
       </main> 
       <Footer></Footer>

    </div>
   
  )
}
