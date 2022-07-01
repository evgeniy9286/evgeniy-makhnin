import Head from 'next/head'
import Menu from "../components/header/Menu"
import Section from "../components/page-price/SectionFone"
import SectionOdin from "../components/page-price/SectionOdin"
import FormLink from "../components/FormLink"
import Footer from '../components/footer/Footer'


export default function Price() {
  return (
   <>
      <Head>
        <title>Прайс-лист</title>
        <meta name="description" content="Прайс-лист моих услуг. Стоимость разработки WEB-приложения начинается от 30 000 ₽." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
       <Section/>
        <SectionOdin/>
        <FormLink/>
        <Footer/>
    </>
  )
}
