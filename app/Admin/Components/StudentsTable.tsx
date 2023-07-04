'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const StudentsTable = (props: Props) => {
  return (
    <motion.div initial={{y:80, opacity: 0}} animate={{y:0, opacity: 1}} transition={{ duration: 0.8}}>
      Student Table
    </motion.div>
  )
}

export default StudentsTable