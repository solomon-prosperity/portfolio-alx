import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from "../images/Saly-10aboutpic.svg"
import '../styles/about.css'

export default function About() {
    return (
        <motion.div
            className='about'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
        >
            <div className='about-top'>
                <div>
                    <img src={aboutImage} alt="log" />
                </div>
                <div>
                    <h1>I'm Afuwape Ayodeji, A <span className='c-orange'>Fullstack</span>  Web <span className='c-orange' >Developer.</span></h1>

                </div>
            </div>
            <section className='about-me'>
                <p className='bold-text'>
                    The standard Lorem Ipsum passage, used since the 1500s
                </p>
                <p className='normal-text'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                </p>

                <p className="bold-text">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                </p>
                <p className="normal-text">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 

                </p>

                <p className="bold-text">1914 translation by H. Rackham
                </p>

                <p className="normal-text">
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
                </p>
            </section>
        </motion.div>
    )
}
