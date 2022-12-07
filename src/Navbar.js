import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);
  const containerRef = useRef(null);
  
  const toggleNav = ()=>{
    setShowLinks(!showLinks);
    const linkHeight = linkRef.current.getBoundingClientRect().height
    if(showLinks){
      containerRef.current.style.height  = `${linkHeight}px`
    }else {
      containerRef.current.style.height = '0px';
    }
  }

  useEffect(()=>{
    toggleNav()
  },[])

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={toggleNav}>
          <FaBars/>
        </button>
      </div>
      <div ref={containerRef} className={`links-container ${showLinks?'show-container':null}`}>
        <ul className="links" ref={linkRef}>
          {links.map(link=>{
            const {id, url,text } = link;
            return <li key={id}>
                <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className="social-icons">
          {social.map((socialLink=>{
            const {id, url, icon} = socialLink;
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          }))}
      </ul>
    </div>
  </nav>
}

export default Navbar
