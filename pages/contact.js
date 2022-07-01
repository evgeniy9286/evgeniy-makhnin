import Head from 'next/head'
import Menu from "../components/header/Menu"
import Section from "../components/page-contact/SectionFone"
import SectionOdin from "../components/page-contact/SectionOdin"
import Footer from '../components/footer/Footer'



export default function Contact() {
  return (
   <>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Заполните форму обратной связи" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
      <Section/>
         <SectionOdin/>
        <Footer/>
    </>
  )
}


