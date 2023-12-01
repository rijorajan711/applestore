import React,{createContext,useState} from 'react'
export const userLoginResponse=createContext()
export const adminProducEditContext=createContext()
export const adminTrendingProducEditContext=createContext()
function CreateContext({children}) {
    
    const[loginResponse,setLoginResponse]=useState({})
    const[adminProducEditResponse,setAdminProducEditResponse]=useState({})
    const [adminTrendingProducEditResponse,setAdminTrendingProducEditResponse]=useState([])
     
  return (
    <div>
        <adminProducEditContext.Provider value={{adminProducEditResponse,setAdminProducEditResponse}}>
        <userLoginResponse.Provider value={{loginResponse,setLoginResponse}}>
         <adminTrendingProducEditContext.Provider value={{adminTrendingProducEditResponse,setAdminTrendingProducEditResponse}}>


          {children}


         </adminTrendingProducEditContext.Provider>
        </userLoginResponse.Provider>
        </adminProducEditContext.Provider>
      
    </div>
  )
}

export default CreateContext
