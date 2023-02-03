import {useContext, createContext,useState,useRef} from "react"
const DataContext=createContext()
const {Provider}=DataContext

const DataGet=({children})=>{
	const [showNav,setShowNav]= useState(false)
	const navRef=useRef()
	const ShowNav=()=>{
		navRef.current.classList.toggle("responsive")
	  }
	return (
		<Provider value={{showNav,setShowNav,ShowNav,navRef}}>
			{children}
		</Provider>
	)
}

const useData=()=>useContext(DataContext)
export {useData,DataGet}