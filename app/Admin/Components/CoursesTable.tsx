'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const CoursesTable = (props: Props) => {
  return (
    <motion.div initial={{y:80, opacity: 0}} animate={{y:0, opacity: 1}} transition={{ duration: 0.8}}>
      CoursesTable
    </motion.div>
  )
}

export default CoursesTable