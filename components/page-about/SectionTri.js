import { motion } from "framer-motion"

export default function SectionTri() {


  return (
   <>
    <div className="cont">
          <motion.div
         initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        className = "wrap-section m-t-1 just-max p-col">
          <div className="content-section top">
         <div className="page-title">
          <h2>Сервер сайт рендеринг</h2>
        </div>
        </div>
         <div
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ease: "easeOut",  duration: 1, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        className="content-section">
         <div className="page-title">
             <p>Почему в WEB-разработке я использую именно Next.js?</p>
             <p>По моему мнению, именно этот фреймворк отвечает современным требованиям WEB-разработки. Вспомните, сколько раз Вы сами покидали интернет ресурс из-за долгой загрузки страницы? Next.js минимизирует данную проблему, используя современные методы и технологии, полученные из многолетнего опыта таких гигантов IT-индустрии как Vercel, Meta и Google. По итогу мы получаем быстрое, SEO-оптимизированное WEB-приложение.</p>
           </div>
         </div>
        </motion.div>
         </div>
   </>
  )
}