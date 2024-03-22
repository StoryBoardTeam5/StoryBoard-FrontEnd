import React from 'react'

import { motion } from 'framer-motion'

const Caret = () => {
  return (
    <motion.div
      aria-hidden={true}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
      className='inline-block h-7 w-0.5 bg-accent-foreground'
    />
  )
}

export default Caret
