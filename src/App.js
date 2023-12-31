
import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
//USER
import Home from './MainPages/UserMainPages/Home'
import HomeNavbar from './Components/UsersComponents/HomeNavbar';
import Footer from './Components/UsersComponents/Footer';
import ViewAllProducts from './MainPages/UserMainPages/ViewAllProducts';
import VIewCart from './MainPages/UserMainPages/VIewCart';
import Wishlist from './MainPages/UserMainPages/Wishlist';
import SignIn from './MainPages/UserMainPages/SignIn';
import { userLoginResponse } from './Context/CreateContext';
import OrderPlacedSuccess from './MainPages/UserMainPages/OrderPlacedSuccess';
import OrderView from './MainPages/UserMainPages/OrderView';
import Adress from './MainPages/UserMainPages/Adress';

//ADMIN
import AdminHeader from './Components/AdminComponent/AdminHeader';
import AdminLogin from './MainPages/AdminMainPages/AdminLogin';
import MainAdminLanding from './MainPages/AdminMainPages/MainAdminLanding';
import AdminProduct from './Components/AdminComponent/AdminProduct';

import AdminAddProduct from './Components/AdminComponent/AdminAddProduct';
import AdminViewUser from './Components/AdminComponent/AdminViewUser';
import GraphPage from './Components/AdminComponent/GraphPage';
import AdminAddTrendingProduct from './Components/AdminComponent/AdminAddTrendingProduct';
import AdminTrendingProduct from './Components/AdminComponent/AdminTrendingProduct';
import DirectionToGmail from './Components/UsersComponents/DirectionToGmail';
import SingleProduct from './Components/UsersComponents/SingleProduct';
import { adminLoginResponseContext } from './Context/CreateContext';






const DefaultLayout = ({ children }) => (


  <>
    <HomeNavbar />

    {children}

    <Footer />
  </>
);

const AdminHeaderAndFooter = ({ children }) => (
  <>
    <AdminHeader />
   
    {children}
  
  </>
);

const AdminlandingFun = ({ children }) => (
  <>
    <MainAdminLanding />
   
    {children}
  
  </>
);



function App() {
 const [userSession,setUserSession]=useState("")
const [adminSession,setAdminSession]=useState("")
  const {loginResponse,setLoginResponse}=useContext(userLoginResponse)
  const {adminLoginResponse,setAdminLoginResponse}=useContext(adminLoginResponseContext)

  useEffect(()=>{
    const usertoken=sessionStorage.getItem("usertoken")
    setUserSession(usertoken)
  },[loginResponse])


  useEffect(()=>{
    const admintoken=sessionStorage.getItem("token")
    setAdminSession(admintoken)
  },[adminLoginResponse])
 
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={
            <DefaultLayout>
              <Routes>
                <Route index element={<Home />} />
                <Route path='viewallproducts/:category' element={<ViewAllProducts />} />
                <Route path='cart' element={userSession?<VIewCart />:<SignIn />} />
                <Route path='wishlist' element={userSession?<Wishlist />:<SignIn />}></Route>
                <Route path='address/:total' element={userSession?<Adress />:<SignIn />}></Route>
                <Route path='orderplacedsuccess' element={userSession?<OrderPlacedSuccess/>:<SignIn />}/>
                <Route path="orderview" element={userSession?<OrderView />:<SignIn />} />
                <Route path='login' element={<SignIn />} />
                <Route path='signin' element={<SignIn signin />} />
                <Route path="directiontogmail" element={<DirectionToGmail />} />
                <Route path='singleproduct/:id' element={<SingleProduct/>}/>
             
              </Routes>
            </DefaultLayout>

          } />

          <Route path='/admin*' element={
            <AdminHeaderAndFooter>
              <Routes>
                <Route index element={<AdminLogin />} />
                <Route path='/landing*' element={
                  adminSession?<AdminlandingFun >
                     <Routes>
                      <Route index element={<GraphPage />} />
                      <Route path='allproduct' element={adminSession?<AdminProduct />:<AdminLogin />} />
                      <Route path='addproduct' element={adminSession?<AdminAddProduct/>:<AdminLogin />}/>
                      <Route path='viewuser' element={adminSession?<AdminViewUser />:<AdminLogin />} />
                      <Route path='trendingaddproduct' element={adminSession?<AdminAddTrendingProduct/>:<AdminLogin />}/>
                      <Route path='trendingallproduct' element={adminSession?<AdminTrendingProduct />:<AdminLogin />} />
                     
                     </Routes>
                    </AdminlandingFun>:<AdminLogin />

              
                }/>
              
              </Routes>
            </AdminHeaderAndFooter>

          } />
       
         </Routes>

      </BrowserRouter>










    </div>
  );
}

export default App;












