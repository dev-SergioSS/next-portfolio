// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si'

// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import React from 'react'

// framer motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../../variants'

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
]

const About = () => {
  const [index, setIndex] = React.useState(0)

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* Avatar */}
      <div
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <Avatar />
      </div>
      <div
        className='container mx-auto h-full flex flex-col items-center xl:flex:row
			gap-6'>
        <div className='flex-1 flex flex-col justify-center'>text</div>

        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          {/* tabs */}
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    itemIndex === index &&
                    'text-accent after:bg-accent after:transition-all after:duration-300 after:w-full'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-1`}
                  onClick={() => {
                    setIndex(itemIndex)
                  }}>
                  {item.title}
                </div>
              )
            })}
          </div>

          {/* active tab content */}
          <div className='bg-pink-300/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex flex-col md:flex-row gap-2 max-w-max items-center text-white/60 '>
                  {/* title */}
                  <div className='mb-2 md:mb-0 font-light'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className='flex gap-4'>
                    {item.icons?.map((item, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className='text-2xl'>
                          {item}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
