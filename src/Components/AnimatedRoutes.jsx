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
                    <Route path="/bio" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Projects />} />
                    <Route path="/elevator-pitch" element={<Blog />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}
