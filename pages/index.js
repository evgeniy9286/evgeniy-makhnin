import Head from 'next/head'
import Menu from "../components/header/Menu"
import Section from "../components/page-index/SectionFone"
import SectionOdin from "../components/page-index/SectionOdin"
import SectionDva from "../components/page-index/SectionDva"
import SectionTri from "../components/page-index/SectionTri"
import SectionChetire from "../components/page-index/SectionChetire"
import SectionPiat from "../components/page-index/SectionPiat"
import FormLink from "../components/FormLink"
import Footer from '../components/footer/Footer'

export default function Home() {


  return (
   <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Разработка высокопроизводительных WEB-приложений" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
        <Section/>
         <SectionOdin/>
         <SectionDva/>
          <SectionTri/>
          <SectionChetire/>
          <SectionPiat/>
           <FormLink/>
       <Footer/>
    </>
  )
}
