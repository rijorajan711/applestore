import React,{createContext,useState} from 'react'
export const userLoginResponse=createContext()
export const adminLoginResponseContext=createContext()
export const adminProducEditContext=createContext()
export const adminTrendingProducEditContext=createContext()
export const adminAddProductContext=createContext()
export const addCartProductContext=createContext()
export const addWishlistProductContext=createContext()
function CreateContext({children}) {
    
    const[loginResponse,setLoginResponse]=useState({})
    const [adminLoginResponse,setAdminLoginResponse]=useState({})
    const[adminProducEditResponse,setAdminProducEditResponse]=useState({})
    const [adminTrendingProducEditResponse,setAdminTrendingProducEditResponse]=useState([])
    const [adminAddProductRespose,setAdminAddProductRespose]=useState([])
    const [userAddCartProductResponse,setUserAddCartProductResponse]=useState('')
    const [userAddWishlistProductResponse,setUserAddWishlistProductResponse]=useState('')
  return (
    <div>
        <adminProducEditContext.Provider value={{adminProducEditResponse,setAdminProducEditResponse}}>
        <userLoginResponse.Provider value={{loginResponse,setLoginResponse}}>
          <adminLoginResponseContext.Provider value={{adminLoginResponse,setAdminLoginResponse}} >
         <adminTrendingProducEditContext.Provider value={{adminTrendingProducEditResponse,setAdminTrendingProducEditResponse}}>
          <adminAddProductContext.Provider value={{adminAddProductRespose,setAdminAddProductRespose}}>
           <addCartProductContext.Provider value={{userAddCartProductResponse,setUserAddCartProductResponse}}>
            <addWishlistProductContext.Provider value={{userAddWishlistProductResponse,setUserAddWishlistProductResponse}}>



            
            {children}
            



            </addWishlistProductContext.Provider>
           </addCartProductContext.Provider>
          </adminAddProductContext.Provider>
         </adminTrendingProducEditContext.Provider>
         </adminLoginResponseContext.Provider>
        </userLoginResponse.Provider>
        </adminProducEditContext.Provider>
      
    </div>
  )
}

export default CreateContext
