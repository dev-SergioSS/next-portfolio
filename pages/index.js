// next Image
import Image from 'next/image'

// components
import ParticleContainers from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full  bg-gradient-to-r from-primary/10 via-black/30  to-black/10'>
        <div className='text-center flex flex-col justify-center h-full container mx-auto xl:pt-40 xl:text-left'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'>
            Transforming ideas <br /> Into{' '}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eius
            officia consequatur a quo enim quasi iste dolore, natus pariatur.
          </motion.p>
          {/* button */}
          <div className='flex justify-center relative xl:hidden'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className='absolute w-[1200px] h-full right-0 bottom-0'>
        {/* bg-image */}
        <div className='absolute bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-repeat w-full h-full mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <div>
          <ParticleContainers />
        </div>
        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute -bottom-32 lg:bottom-0 lg:right-[-8%] w-full max-w-[737px] '>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
