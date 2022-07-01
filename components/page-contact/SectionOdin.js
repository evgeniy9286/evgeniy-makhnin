import { motion } from "framer-motion"
import Form from './form'

export default function SectionOdin() {


  return (
   <>
    <div className="cont">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3, type: "tween"}}
  viewport={{ once: true }}
          className="m-t-1">
          <Form/>
        </motion.div>
        </div>
   </>
  )
}