import { motion } from "framer-motion"

export default function SectionDva() {


  return (
   <>
    <div className="cont">
            <div className="m-t-1 page-title">
           <div className="page-title-wrap">
             <div className="text-right">
          <motion.h2 
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3, type: "tween"}}
  viewport={{ once: true }}
          >Технологии не стоят на месте</motion.h2>
        </div>
        </div>
        </div>

         </div>
   </>
  )
}