import { motion } from "framer-motion"

export default function SectionDva() {


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
          <h2>Стиль минимализм</h2>
        </div>
        </div>
         <div
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ease: "easeOut",  duration: 1, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        className="content-section">
         <div className="page-title">
             <p>Почему в WEB-дизайне я предпочитаю стиль минимализм и Вам рекомендую?</p>
             <p>Именно стиль минимализм соответствует современным реалиям юзабилити. Вспомните сами, когда Вы заходите на интернет ресурс переполненный различным текстом, изображениями и иконками... Много ли информации Вы получите, особо не вчитываясь? Уверен что нет. Локаничный стиль минимализма в WEB-дизайне и расчитан именно на то чтобы пользователь сразу же, особо не вникая в контент получил то что ему нужно.</p>
           </div>
         </div>
        </motion.div>
         </div>
   </>
  )
}