import { motion, useScroll, useSpring, useTransform } from 'motion/react'

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 100, damping: 50, mass: 1 });
  const bridge = useTransform(x, [0, 0.5], [0, 500]);
  const pisa = useTransform(x, [0, 0.5], [0, -300]);
  const gate = useTransform(x, [0, 0.5], [0, -200]);
  const colosseum = useTransform(x, [0, 0.5], [0, 300]);
  const greatwall = useTransform(x, [0, 0.5], [0, 250]);


  return (
      <div className='relative h-screen overflow-y-hidden bg-[#fdfbd4] overflow-x-hidden'>
        {/* Golden Bridge */}
        <motion.div
            style={{ x: bridge }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className='absolute top-0 left-0 w-full h-full z-60'
        >
            <motion.img 
                src="/olympicsImages/golden-bridge-copy.png" 
                alt="Golden Bridge" 
                className='absolute -right-37.5 -bottom-37.5 scale-x-[-1] h-[90vh] w-[90vw] z-60'
                // dont remove these part these for reference
                // initial={{ x: "-100%" }}
                // animate={{ x: 0 }}   
                // transition={{ duration: 2, ease: "easeInOut" }}
            />
        </motion.div>

        {/* Pisa Tower */}
        <motion.div
            style={{ x : pisa }}
            className='absolute w-full left-0 h-[90vh] z-70 bottom-0'
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        >
            <motion.img 
                src="/olympicsImages/pisa.png" 
                alt="pisa" 
                className='absolute bottom-0 h-[80vh] left-180px scale-x-[-1] z-70'
                // dont remove these part these for reference
                // initial={{ x: "100%" }}
                // animate={{ x: 0 }}
                // transition={{ duration: 2, ease: "easeInOut" }}
            />
        </motion.div>

        {/* Torri Gate */}
        <motion.div
            style={{ x: gate }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.95, ease: "easeInOut" }}
            className='absolute top-0 left-10 w-full h-[90vh] z-80'
        >
            <motion.img
                src="/olympicsImages/torriigate.png"
                alt="Torri Gate"
                className='absolute -bottom-30 -left-15 h-[60vh] z-80'
                // dont remove these part these for reference
                // initial={{ x: "-100%" }}
                // animate={{ x: 0 }}
                // transition={{ duration: 2, ease: "easeInOut" }}
            />
        </motion.div>

        {/* Great Wall */}
        <motion.div
            style={{ y: greatwall }}
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className='absolute w-full h-[90vh] z-0 bottom-0'
        >
            <motion.img
                src="/olympicsImages/greatwall-final.png"
                alt="great wall"
                className="absolute bottom-0 z-0"
                // dont remove these part these for reference
                // initial={{ y: "100%" }}
                // animate={{ y: 0 }}
                // transition={{ duration: 2, ease: "easeInOut" }}
            />
        </motion.div>


        {/* Colosseum */}
        <motion.div
        style={{ y : colosseum }}
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 2,delay: 1, ease: "easeInOut" }}
            className='absolute w-full h-[90vh] z-80 bottom-0'
        >
            <motion.img 
                src="/olympicsImages/Colosseum.png" 
                alt="Colosseum" 
                className='absolute -bottom-45 right-87.5 h-[70vh] z-90'
                // dont remove these part these for reference
                // initial={{ y: "100%" }}
                // animate={{ y: 0 }}
                // transition={{ duration: 2, ease: "easeInOut" }}
            />
        </motion.div>
    </div>
  )
}

export default ParallaxBackground
