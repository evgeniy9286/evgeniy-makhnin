import Link from 'next/link'
import { motion } from "framer-motion"

export default function FormLink() {


  return (
   <>
   <div className="cont">
     <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        className = "link-form m-t-1">
          <div
          className="page-title">
            <p>Заинтересовало мое предложение? Свяжитесь со мной по указанным ниже контактам, либо <Link href="/contact"><a className="linf-form">заполните форму</a></Link> обратной связи и я обязательно свяжусь с Вами для уточнения деталей.</p>
          </div>
        </motion.div>
    </div>
   </>
  )
}