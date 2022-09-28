import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from "../Screens/About";
import Home from "../Screens/Home";
import Projects from "../Screens/Projects";
import Contact from '../Screens/Contact'
import Blog from '../Screens/Blog'
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation()
    return (
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}
