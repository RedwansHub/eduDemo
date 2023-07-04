'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import useRegisterModal from '../hooks/useRegisterModal'
import Container from './utils/Container'
import Reveal from './motionUI/Reveal'
import Button from './utils/Button'
type Props = {}

const Hero = (props: Props) => {

    
  const registerModal = useRegisterModal()
  const handleAuth = () => {
    registerModal.onOpen()
  }
  return (
    <Container>
    <div className='pt-28 grid lg:grid-cols-2 sm:lg grid-cols-1 sm:place-items-center '>

          <div className='p-4 grid  text-center sm:text-left sm:w-full sm:p-8'>
            <Reveal>
                <h4 className="text-5xl font-bold  py-2">
                  Unlock Your Potential, Level Up Your Education
                </h4>
            </Reveal>
            <Reveal>
                <h1 className="text-lg py-8">
                Experience the power of gamified learning as you unlock your full potential. Level up your education through engaging tasks, personalized guidance, and a supportive community of learners.
                </h1>
            </Reveal>
            <Reveal>
              <div className='w-60 pt-8'>
                <Button label='Get Started' onClick={() => handleAuth()} />
              </div>
            </Reveal>
          </div>
          <div className=''>
            <motion.div initial={{ y: 80, opacity: 0}} animate={{ y: 0, opacity: 1}} transition={{duration: 1.8 ,delay: 1}}  
                className="lg:pt-12 grid col-span-4 ">
                <Image src={'/Images/Laptop.png'} alt="Laptop" width={550} height={500} className="h-[500px] w-[550px] sm:w-full rounded-md "/>
            </motion.div>
          </div>
    </div>
  </Container>
  )
}

export default Hero