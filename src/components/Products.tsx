'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion, useAnimate, useInView } from "framer-motion"
import Image from 'next/image'

type Props = {}

function Products({}: Props) {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [scope, animate] = useAnimate()
    const [show, setshow] = useState<boolean>(false)
    const { scrollYProgress } = useScroll({
        target: carouselRef,
        offset: ["start end", "end start"]
    })
    
    const isInView = useInView(scope)

    useEffect(() => {
       if (show) {
         animate(scope.current, { translateX:'-400px', perspective: 400, rotateX:10, rotateY:20, transition:'ease-in-out'},{ duration: 0.5 })
       }else if(!show){
        animate(scope.current, { translateX:'0px', perspective: 0, rotateX:0, rotateY:0, transition:'ease-in-out' },{ duration: 0.5 })
       }
    }, [isInView, show])

    const rotateY = useTransform(
        scrollYProgress,
        [0, 1],
        [-45, 45]
    )
    const rotateX = useTransform(
        scrollYProgress,
        [0, 1],
        [-45, 45]
    )

    return (
        <div ref={scope} className='h-[100vh]'>
            <div ref={!show ? carouselRef : null} className='flex items-center justify-center h-screen w-full '>
            <motion.div transition={{duration:200, ease:'easeInOut'}}  onClick={() => setshow(!show)} style={{ perspective: 300, rotateY, rotateX,}} className='w-[400px] h-[500px] pushable'>
                
                <span className="shadow"></span>
                <span className="edge">
                    <Image className='w-full h-full object-cover p-1 rounded-xl' src='/owl.jpg' width={300} height={300} alt='Owl' />
                </span>

            </motion.div>
            <motion.div className={`z-[999] absolute -right-[25%] overflow-hidden ${show ? "visible z-30" : "invisible -z-20"} max-w-screen-sm `} initial={{opacity:0, translateX:-500, zIndex:-300}} animate={show ?  {perspective:400, rotateX:-10, rotateY:20, translateX:-100, translateY:-50, zIndex:10, opacity:1}:{opacity:0,perspective:0, rotateX:0, rotateY:0, translateX:0, translateY:0, zIndex:0}} transition={{duration:1}}>
                <h1 className='font-semibold text-left text-4xl'>Couple Sticker For You</h1>
              <p className='text-neutral-600 text-left block my-3'>Celebrate your love with our Couple Badges! Perfect for anniversaries or daily wear, these matching badges feature cute designs and durable pin-backs, adding a fun, stylish touch to any outfit.</p>
              <p className='font-medium text-rose-600 text-left block my-3'>5 pieces per pack</p>
              <div className='mt-6 flex items-center justify-center space-x-4'>
              <button className='p-3 px-6 bg-pink-600 text-white font-medium rounded-full '>Customize</button>
              <button className='p-3 px-6 bg-green-600 text-white font-medium rounded-full '>Shop</button>
              </div>
            </motion.div>
            </div>
        </div>
    )
}

export default Products
