import '../styles/navbar.css'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [show, setShow] = useState(true);

    function handleClick() {
        setShow(prev => !prev)
    }

    const location = useLocation();
    return (
        <div className='nav'>
            <GiHamburgerMenu id='hamb' onClick={handleClick} size={30} />

            <ul
                id={show ? 'show' : ''}
            >
                <li onClick={handleClick} className={location.pathname === '/' ? 'show-dot' : ''} ><Link to='/'>Home</Link></li>

                <li onClick={handleClick} className={location.pathname === '/bio' ? 'show-dot' : ''}>
                    <Link to='/bio'>Bio</Link>
                </li>

                

                <li onClick={handleClick} className={location.pathname === '/portfolio' ? 'show-dot' : ""}><Link to='/portfolio'>Portfolio</Link></li>


                <li onClick={handleClick} className={location.pathname === '/elevator-pitch' ? 'show-dot' : ""}><Link to='/elevator-pitch'>Elevator Pitch</Link></li>

                {/* <li onClick={handleClick} className={location.pathname === '/contact' ? 'show-dot' : ""}><Link to='/contact'>Contact Me</Link></li> */}

            </ul>
        </div>
    )
}
