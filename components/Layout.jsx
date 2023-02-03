import {useEffect,useState} from 'react'
import { useData } from '../context/DataContext'
import Nav from './Nav'

const Layout = ({children}) => {
	// const [localVar,setLocalVar] = useState()
	
// useEffect(()=>{
// 	const lol=JSON.parse(localStorage.getItem("func"))
// 	// const lols= eval('('+lol+')')
// 	setLocalVar(lol)
// })

// console.log(localVar)
const {ShowNav}=useData()
  return (
	<div>
		<svg onClick={ShowNav}  className='hamburger' xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
		<Nav />
		{children}
	</div>
  )
}

export default Layout