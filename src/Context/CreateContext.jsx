import React,{createContext,useState} from 'react'
export const userLoginResponse=createContext()
export const adminProducEditContext=createContext()
function CreateContext({children}) {
    
    const[loginResponse,setLoginResponse]=useState({})
    const[adminProducEditResponse,setAdminProducEditResponse]=useState({})
     
  return (
    <div>
        <adminProducEditContext.Provider value={{adminProducEditResponse,setAdminProducEditResponse}}>
        <userLoginResponse.Provider value={{loginResponse,setLoginResponse}}>


          {children}

        </userLoginResponse.Provider>
        </adminProducEditContext.Provider>
      
    </div>
  )
}

export default CreateContext
