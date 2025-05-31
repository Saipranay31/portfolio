'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaProjectDiagram, FaHome, FaGraduationCap, FaFileAlt } from 'react-icons/fa';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <header>
      <Link href="/home" className="logo" onClick={closeNavbar}>
        Portfolio
      </Link>

      <button className="menu-icon" onClick={toggleNavbar} aria-label="Toggle Menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={isOpen ? 'active' : ''}>
        <Link href="/home" onClick={closeNavbar} className="nav-link">
          <FaHome style={{ marginRight: '6px' }} />
          Home
        </Link>

        <Link href="/home/project" onClick={closeNavbar} className="nav-link">
          <FaProjectDiagram style={{ marginRight: '6px' }} />
          Projects
        </Link>

       <Link href="/home/resume" onClick={closeNavbar} className="nav-link">
          <FaFileAlt style={{ marginRight: '6px' }} />
          Resume
        </Link>

      </nav>
    </header>
  );
}
