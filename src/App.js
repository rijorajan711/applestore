
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//USER
import Home from './MainPages/UserMainPages/Home'
import HomeNavbar from './Components/UsersComponents/HomeNavbar';
import Footer from './Components/UsersComponents/Footer';
import ViewAllProducts from './MainPages/UserMainPages/ViewAllProducts';
import VIewCart from './MainPages/UserMainPages/VIewCart';
import Wishlist from './MainPages/UserMainPages/Wishlist';
import SignIn from './MainPages/UserMainPages/SignIn';

//ADMIN
import AdminHeader from './Components/AdminComponent/AdminHeader';
import AdminLogin from './MainPages/AdminMainPages/AdminLogin';
import MainAdminLanding from './MainPages/AdminMainPages/MainAdminLanding';
import AdminProduct from './Components/AdminComponent/AdminProduct';
import Kartha from './Components/AdminComponent/Kartha';
import AdminAddProduct from './Components/AdminComponent/AdminAddProduct';
import AdminViewUser from './Components/AdminComponent/AdminViewUser';
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import { userLoginResponse } from './Context/CreateContext';





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

  const {loginResponse,setLoginResponse}=useContext(userLoginResponse)

  useEffect(()=>{
    const usertoken=sessionStorage.getItem("usertoken")
    setUserSession(usertoken)
  },[loginResponse])
 
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
                <Route path='login' element={<SignIn />} />
                <Route path='signin' element={<SignIn signin />} />
              </Routes>
            </DefaultLayout>

          } />

          <Route path='/admin*' element={
            <AdminHeaderAndFooter>
              <Routes>
                <Route index element={<AdminLogin />} />
                <Route path='/landing*' element={
                    <AdminlandingFun >
                     <Routes>
                      <Route index element={<Kartha/>} />
                      <Route path='allproduct' element={<AdminProduct />} />
                      <Route path='addproduct' element={<AdminAddProduct/>}/>
                      <Route path='viewuser' element={<AdminViewUser />} />
                     </Routes>
                    </AdminlandingFun>

              
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











