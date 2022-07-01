import { motion } from "framer-motion"
import Image from 'next/image'
import Next from '../../public/image-2.jpg'

export default function SectionOdin() {


  return (
   <>
    <div className="cont">
     <div className="wrap-section m-t-1 just-max p-col">
        <div className="image-section">
             <Image
        src={Next}
        alt="Разработка высокопроизводительных WEB-приложений"
        //width={1000} automatically provided
       // height={1300} automaticallyy providedy
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
      </div>
        <div className="content-section">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
          className="page-title">
          <p>Вы наверное не раз задавались вопросом о том как улучшить скорость загрузки страниц вашего будущего или нынешнего сайта. Ведь при медленной скорости соединения с интернетом страницы долго грузятся, либо не грузятся вообще. А ведь правило трех секунд никто не отменял, согласно многим исследованиям если у пользователя не открывается запрашиваемая им страница в течении первых трех секунд, то велика вероятность того что он просто покинет данный сайт, а ведь это ваш потенциальный клиент.</p>
          <p>К тому же, при ранжировании поисковыми системами релевантных запросу сайтов, большее предпочтение отдается именно тем чья скорость загрузки выше. Помимо этого конечно же учитывается и множество других факторов, но скорость один из важнейших.</p>
           <p>Так что же делать? Как улучшить конверсию и SEO оптимизацию вашего сайта? Спросите Вы...</p>
        </motion.div>
         </div>
         </div>
         </div>
   </>
  )
}