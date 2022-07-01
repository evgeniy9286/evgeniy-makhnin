import { motion } from "framer-motion"

export default function Section() {


  return (
   <>
     <div className="phone-title content_bg-1">
          <motion.h1
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Разработка web-приложений</motion.h1>
        </div>
   </>
  )
}