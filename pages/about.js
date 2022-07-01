import Head from 'next/head'
import Menu from "../components/header/Menu"
import Section from "../components/page-about/SectionFone"
import SectionOdin from "../components/page-about/SectionOdin"
import SectionDva from "../components/page-about/SectionDva"
import SectionTri from "../components/page-about/SectionTri"
import FormLink from "../components/FormLink"
import Footer from '../components/footer/Footer'

export default function About() {



  return (
   <>
      <Head>
        <title>Обо мне</title>
        <meta name="description" content="Меня зовут Евгений Махнин. Мне 40 лет, проживаю в городе Калининград. Я работал WEB-разработчиком в различных компаниях, а также вел свой проект, новостной портал на спортивную тематику, который по ряду высокочастотных запросов входил в ТОП-3 поисковой системы Яндекс." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
      <Section/>
      <SectionOdin/>
      <SectionDva/>
      <SectionTri/>
       <FormLink/>
        <Footer/>
    </>
  )
}