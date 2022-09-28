import React from 'react'
import { motion } from 'framer-motion'

export default function Blog() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
        >Blog</motion.div>
    )
}
