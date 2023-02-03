import {useRef,useEffect} from 'react'
import { useData } from '../context/DataContext'

const Nav = () => {
const {navRef}=useData()

 
  // useEffect(()=>{
  //   localStorage.setItem("func",ShowNav)
  // })
  return (
	<header ref={navRef}>
    
      <nav >
        <ul>
          <li className='first-link'>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </nav>
  </header>
  )
}

export default Nav