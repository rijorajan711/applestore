import React from "react";
import { useState, useEffect } from "react";
import {
  getCartProductsAPI,
  removeProductFromCartSubmitAPI,
  increDecreSubmitAPI,
} from "../../axios/allAPI/userAPI";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../../axios/baseURL";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { addCartProductContext } from "../../Context/CreateContext";

function VIewCart() {
  const {userAddCartProductResponse,setUserAddCartProductResponse}=useContext(addCartProductContext)
  const [cartProductState, setCartProductState] = useState({});

  const getCartProducts = async () => {
    const usertoken = sessionStorage.getItem("usertoken");
    if (usertoken) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${usertoken}`,
      };
      const result = await getCartProductsAPI(reqHeader);
      if (result.status === 200) {
        setCartProductState(result?.data);
      }
    } else {
      toast.warning("You cant access Cart Plese login");
    }
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  const removeProductFromCartSubmit = async (productId) => {
    const usertoken = sessionStorage.getItem("usertoken");
    if (usertoken) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usertoken}`,
      };

      const reqBody = {
        productId,
      };

      const result = await removeProductFromCartSubmitAPI(reqBody, reqHeader);

      if (result.status === 200) {
        setUserAddCartProductResponse(result.data)
        getCartProducts();
      } else {
        toast.warning(result.response.data);
      }
    } else {
      toast.warning("you cat access it please login");
    }
  };

  const increDecreSubmit = async (productId, presentCount, actionValue) => {
    const usertoken = sessionStorage.getItem("usertoken");
    if (usertoken) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usertoken}`,
      };

      const reqBody = {
        productId,
        actionValue,
      };

      if (presentCount === 1 && actionValue === -1) {
        document.getElementById(productId).classList.add("hidden");
      } else {
        document.getElementById(productId).classList.remove("hidden");
        const result = await increDecreSubmitAPI(reqBody, reqHeader);
        if (result.status === 200) {
          setUserAddCartProductResponse(result.data)
          getCartProducts();
        } else {
          toast.warning(result.response.data);
        }
      }
    } else {
      toast.warning("you cat access it please login");
    }
  };

  // console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",cartProduct)

  return (
    <div className="group min-h-screen w-[100%] flex-col pt-[15%] sm:pt-[10%]">
      <div className="w-full  h-28  text-slate-400 font-Lobster text-9xl flex  justify-center ">
        {" "}
        Cart{" "}
      </div>
      <div className="w-[100%] mt-[5%] grid gap-2  lg:grid-cols-6 ">
        <div className="col-span-4  bg-slate-100  ">
          {cartProductState?.cartProducts?.length > 0 ? (
            <table className="w-[100%] border leading-10 border-y-2">
              <thead className="border border-y-2 ">
                <tr>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartProductState?.cartProducts?.map((product) => (
                  <tr
                    key={product._id.productDetails._id}
                    className="text-center font-fourthStyle "
                  >
                    <td>{product._id.productDetails.title}</td>
                    <td>
                      <img
                        className="mx-auto h-[70px] min-h-0-[70px] max-w-[70px] min-w-[70px]"
                        src={`${BASE_URL}/images/${product._id.productDetails.uploadimages[0]}`}
                        alt=""
                      />
                    </td>
                    <td className="flex justify-center gap-5 items-center">
                      {product._id.count}{" "}
                      <div className="flex flex-col">
                        <i
                          onClick={() =>
                            increDecreSubmit(
                              product._id.productDetails._id,
                              product._id.count,
                              1
                            )
                          }
                          class="fa-solid fa-angle-up "
                        ></i>{" "}
                        <i
                          id={`${product._id.productDetails._id}`}
                          onClick={() =>
                            increDecreSubmit(
                              product._id.productDetails._id,
                              product._id.count,
                              -1
                            )
                          }
                          class="fa-solid fa-angle-down"
                        ></i>
                      </div>
                    </td>
                    <td>{product._id.productDetails.price}</td>
                    <td>
                      <button
                        onClick={() =>
                          removeProductFromCartSubmit(
                            product._id.productDetails._id
                          )
                        }
                        className="bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600 text-"
                      >
                        REMOVE
                      </button>
                    </td>
                    <td>{product._id.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center text-4xl text-gray-600 font-fourthStyle">
              <h1>sorry your cart is empty!!!!</h1>
            </div>
          )}
        </div>
        <div className="lg:col-span-2 content-center col-span-4 bg-slate-50 flex flex-col justify-center gap-5">
          <div className="w-[80%] h-[250px] mx-auto bg-gradient-to-br from-slate-200  to-gray-900 rounded-3xl gap-6 flex flex-col items-center pt-6">
            <h1 className="text-slate-700  font-thridStyle text-4xl">
              Cart Total
            </h1>

            {cartProductState?.cartProducts?.length > 0 ? (
              <h1 className="font-fourthStyle text-2xl">
                Total Amount:{cartProductState.grandTotal} ₹{" "}
                <span className="text-5xl  font-Lobster text-orange-500"></span>
              </h1>
            ) : (
              <h1 className="font-fourthStyle text-2xl">
                Total Amount:0 ₹{" "}
                <span className="text-5xl  font-Lobster text-orange-500"></span>
              </h1>
            )}
          </div>
          <div className="w-[80%] mx-auto flex justify-center">
          <Link to={`/address/${cartProductState?.grandTotal}`} className="w-[100%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000">
          <button className="w-[100%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000">
              PROCEED TO CHECKOUT
            </button>
          </Link>  
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default VIewCart;
