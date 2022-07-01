import { motion } from "framer-motion"
import Image from 'next/image'
import Next from '../../public/shark.jpg'

export default function SectionOdin() {


  return (
   <>
    <div className="cont">
           <div className="wrap-section m-t-1 just-max p-col">
        <div className="image-section">
             <Image
        src={Next}
        alt="Махнин Евгений"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
         </div>
        <div
        className="content-section">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
          className="page-title">
          <p>Меня зовут Евгений Махнин. Мне 40 лет, проживаю в городе Калининград.</p>
          <p>Я работал WEB-разработчиком в различных компаниях, а также вел свой проект, новостной портал на спортивную тематику, который по ряду высокочастотных запросов входил в ТОП-3 поисковой системы Яндекс.</p>
           <p>Из имеющегося у меня опыта WEB-разработки и SEO-продвижения могу с увереностью сказать что для успешного продвижения интернет ресурса в сети и хороших показателей конверсии необходимо учесть много факторов. Основные из которых это SEO оптимизированая структура сайта, соблюдение правил написания мета-тегов, высокие показатели загрузки страниц на клиент, уникальность контента, ссылочная масса с других ресурсов. Ну и конечно же дизайн, пользователь должен получить всю нужную для него информацию, особо не напрягаясь.</p>
        </motion.div>
         </div>
        </div>
         </div>
   </>
  )
}