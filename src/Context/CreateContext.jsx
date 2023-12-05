import React,{createContext,useState} from 'react'
export const userLoginResponse=createContext()
export const adminProducEditContext=createContext()
export const adminTrendingProducEditContext=createContext()
export const adminAddProductContext=createContext()
function CreateContext({children}) {
    
    const[loginResponse,setLoginResponse]=useState({})
    const[adminProducEditResponse,setAdminProducEditResponse]=useState({})
    const [adminTrendingProducEditResponse,setAdminTrendingProducEditResponse]=useState([])
    const [adminAddProductRespose,setAdminAddProductRespose]=useState([])
    
  return (
    <div>
        <adminProducEditContext.Provider value={{adminProducEditResponse,setAdminProducEditResponse}}>
        <userLoginResponse.Provider value={{loginResponse,setLoginResponse}}>
         <adminTrendingProducEditContext.Provider value={{adminTrendingProducEditResponse,setAdminTrendingProducEditResponse}}>
          <adminAddProductContext.Provider value={{adminAddProductRespose,setAdminAddProductRespose}}>



          {children}



          </adminAddProductContext.Provider>
         </adminTrendingProducEditContext.Provider>
        </userLoginResponse.Provider>
        </adminProducEditContext.Provider>
      
    </div>
  )
}

export default CreateContext
