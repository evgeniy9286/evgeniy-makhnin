import { motion } from "framer-motion"

export default function SectionPiat() {


  return (
   <>
    <div className="cont">
               <div className="m-t-1">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
          className="primer">
            <h2>В своих проектах Next.js используют:</h2>
            <div className="m-t-3 wrap">

              <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/">Tik Tok</a></p>
             </div>

              <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://m.twitch.tv/">Twitch</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.netflix.com/">Netflix</a></p>
             </div>

              <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://copilot.github.com/">GitHub</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.nike.com/">Nike</a></p>
             </div>

              <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.hbomax.com/">HBO Max</a></p>
             </div>

              <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://compete.playstation.com/">Playstation</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.nintendo.com/">Nintendo</a></p>
             </div>

             

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.trip.com/">Trip</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.today.com/">Today</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.lego.com/">Lego</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://finder.porsche.com/">Porsche</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.ferrari.com/">Ferrari</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://jobs.redbull.com/">Red Bull</a></p>
             </div>

             <div className="primer-link">
             <p><a target="_blank" rel="noreferrer" href="https://www.marvel.com/">Marvel</a></p>
             </div>

             </div>
          </motion.div>
        </div>
         </div>
   </>
  )
}