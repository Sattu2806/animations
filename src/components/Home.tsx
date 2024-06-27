'use client'
import React, { useEffect, useState } from 'react'
import { Lobster } from "next/font/google";
import { motion } from "framer-motion";
import Image from 'next/image';

type Props = {}

// Move the font loader call to the module scope
const lobster = Lobster({ subsets: ['latin-ext'], weight: '400' });

// Define animation variants
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, type: 'smooth' } },
}
const child = {
  hidden: { opacity: 0, translateY: 110 },
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.2, type: 'tween' } },
}

const scrollVariants1 = {
  hidden: { translateX: -300, rotate: 12, opacity:0, transition: { duration: 0.5, type: 'smooth' } },
  visible: { translateX: 0, opacity:1,scale:2, transition: { duration: 0.5, type: 'smooth' } },
}

const scrollVariants4 = {
  hidden: { translateX: 300, rotate: 12, opacity:0, transition: { duration: 0.5, type: 'smooth' } },
  visible: { translateX: 0,opacity:1,scale:2, transition: { duration: 0.5, type: 'smooth' } },
}
const scrollVariants2 = {
  hidden: { translateX: -300, rotate: 12, opacity:0, transition: { duration: 0.5, type: 'smooth' } },
  visible: { translateX: 0,opacity:1,scale:2, transition: { duration: 0.5, type: 'smooth' } },
}

const scrollVariants3 = {
  hidden: { translateX: 300, rotate: 12, opacity:0, transition: { duration: 0.5, type: 'smooth' } },
  visible: { translateX: 0,opacity:1,scale:2, transition: { duration: 0.5, type: 'smooth' } },
}

const scrollVariants5 = {
  hidden: { translateX: 100, rotate: 135, translateY:-200, opacity:0, transition: { duration: 0.5, type: 'smooth' } },
  visible: { translateX: 0,translateY:100,opacity:1, scale:2, transition: { duration: 0.5, type: 'smooth' } },
}

function Homepage({ }: Props) {
  const [scrollDown, setScrollDown] = useState<boolean>(false);

  console.log("sc",scrollDown)

  useEffect(() => {
    const handleScroll = () => {
      setScrollDown(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${lobster.className} relative h-[100vh] overflow-hidden`}>
      <div className='h-full flex items-center justify-center'>
        <motion.div initial='hidden' animate='visible' variants={variants} className='flex flex-col items-center justify-between text-7xl font-semibold space-y-8 z-40'>
          <motion.h1 variants={child}>
            Welcome
          </motion.h1>
          <motion.p variants={child} className='text-6xl'>
            to PiStore
          </motion.p>
          <motion.p variants={child} className='text-5xl'>
            Your own shopping cart
          </motion.p>
          <motion.input variants={child} type="text" placeholder='Search for products' className='focus:outline h-12 focus:right-0 outline-none border-[2px] border-rose-300 rounded-full max-w-[700px] focus:border-rose-500 w-full px-4 text-base placeholder:text-center' />
        </motion.div>
      </div>
      <motion.div className='absolute top-0 left-0' variants={scrollVariants1} initial='hidden' animate={scrollDown ? 'hidden' : 'visible'}>
        <Image src='/sticker.webp' width={150} height={150} alt='Owl' />
      </motion.div>
      <motion.div className='absolute top-0 right-0' variants={scrollVariants4} initial='hidden' animate={scrollDown ? 'hidden' : 'visible'}>
        <Image src='/owl.jpg' width={150} height={150} alt='Owl' />
      </motion.div>
      <motion.div className='absolute bottom-0 left-0' variants={scrollVariants2} initial='hidden' animate={scrollDown ? 'hidden' : 'visible'}>
        <Image src='/deco.webp' width={150} height={150} alt='Owl' />
      </motion.div>
      <motion.div className='absolute bottom-0 right-0' variants={scrollVariants3} initial='hidden' animate={scrollDown ? 'hidden' : 'visible'}>
        <Image src='/flower.jpg' width={150} height={150} alt='Owl' />
      </motion.div>
      <motion.div className='absolute -top-[15%] right-1/3' variants={scrollVariants5} initial='hidden' animate={scrollDown ? 'hidden' : 'visible'}>
        <Image src='/lady.jpg' width={150} height={150} alt='Owl' />
      </motion.div>
    </div>
  )

}

export default Homepage
