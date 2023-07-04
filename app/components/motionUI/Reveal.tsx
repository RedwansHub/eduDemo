'use client'

import React, {useEffect, useRef} from 'react'
import { useAnimation, useInView,  motion as m, useScroll, useTransform, inView } from "framer-motion"

type Props = {
    children: JSX.Element,
    width? : "fit-content" | "100%";
}

const Reveal = ({children, width="fit-content"}: Props) => {
    
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const sideControls = useAnimation();
  
    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
            sideControls.start('visible')
        }
        
    }, [isInView])

    return (
    <div ref={ref} style={{ position: "relative", width, overflow: 'hidden' }}>
        <m.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 1, y:0}
        }} initial= "hidden" animate={mainControls} transition={{delay: 0.5, duration: 0.8}}>
            {children}
        </m.div>
        <m.div variants={{
            hidden: {left: 0},
            visible: {left: '100%'}
        }} initial= "hidden" animate={sideControls} transition={{ease:"easeIn", duration: 0.8}}
            className='absolute top-2 bottom-4 left-0 right-0 z-auto bg-[#1fc26b]'
        />
    </div>
  )
}

export default Reveal