import { motion } from "framer-motion"

export default function Section() {


  return (
   <>
     <div className="content_bg-2 phone-title">
          <motion.h1 
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Раскажу немного о себе</motion.h1>
        </div>
   </>
  )
}