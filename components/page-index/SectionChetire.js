import { motion } from "framer-motion"

export default function SectionChetire() {


  return (
   <>
    <div className="m-t-1">
          <div className="big-text">
            <motion.p
            initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
            >Скорость</motion.p>
            <motion.p
            initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease: "easeOut",  duration: 1, delay: 0.8, type: "tween"}}
  viewport={{ once: true }}
            >Качество</motion.p>
            <motion.p
            initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease: "easeOut",  duration: 1, delay: 1, type: "tween"}}
  viewport={{ once: true }}
            >Безопасность</motion.p>
          </div>
         </div>

   </>
  )
}