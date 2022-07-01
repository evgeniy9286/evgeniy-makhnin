import { motion } from "framer-motion"
import Image from 'next/image'
import NextTwo from '../../public/react.jpg'

export default function SectionTri() {


  return (
   <>
    <div className="cont">
     <div className="wrap-section m-t-1 just-max p-col">
        <div
        className="content-section order-2">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
          className="page-title">
          <p>Next.js - это современный фреймворк, разработанный компаниями Vercel и Google поверх знаменитой библиотеки React.js от компании Meta. К слову говоря, пользовательский интерфейс Instagram полностью выполнен на React.js.</p>
          <p>Но у React.js есть два существенных недостатка. Приложения, разработанные на данной библиотеке не индексируются поисковыми роботами, всвязи с чем плохие показатели SEO-продвижения. Первоначальная загрузка приложения может занять довольно длительное время, что негативно сказывается на юзабилити.</p>
          <p>Next.js решает эти проблемы. Из основного преимущества можно выделить поддержку SSR, так как она позволяет одновременно и повысить производительность, и улучшить позиции сайта в поисковой выдаче. Загрузка приложений происходит значительно быстрее, чем аналогов, разработанных на чистом React.js. Это достигается благодаря встроенному рендерингу на сторону сервера.</p>
        </motion.div>
         </div>
         <div className="image-section order-1">
             <Image
        src={NextTwo}
        alt="Разработка высокопроизводительных WEB-приложений"
        //width={1000} automatically provided
       //height={4032} automaticallyy providedy
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
         </div>
        </div>
         </div>
   </>
  )
}