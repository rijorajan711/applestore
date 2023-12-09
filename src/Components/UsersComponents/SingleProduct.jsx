import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    addToCartSubmitAPI,
    addToWishListSubmitAPI,
    getSingleProductAPI,
} from "../../axios/allAPI/userAPI";
import { BASE_URL } from "../../axios/baseURL";
import { ToastContainer, toast } from "react-toastify";
import { addCartProductContext } from "../../Context/CreateContext";
import { addWishlistProductContext } from "../../Context/CreateContext";
import { useContext } from "react";

function SingleProduct() {
    const {userAddCartProductResponse,setUserAddCartProductResponse}=useContext(addCartProductContext)
    const {userAddWishlistProductResponse,setUserAddWishlistProductResponse}=useContext(addWishlistProductContext)
    const { id } = useParams();
    const [singleProductState, setSingleProductState] = useState("");
    const [mainImage, setMainImage] = useState("");

    const getSingleProduct = async (idd) => {
        const productid = { id: idd };
        // console.log("tyyyype idddd", typeof reqBody);
        const result = await getSingleProductAPI(productid);

        if (result.status === 200) {
            console.log(result.data);
            setSingleProductState(result.data);
            setMainImage(result.data.uploadimages[0]);
        } else {
            // console.log(result.response.data);
        }
    };

    useEffect(() => {
        if (id) {
            getSingleProduct(id);
        }
    }, []);

    const addToCartSubmit = async (productId) => {
        const usertoken = sessionStorage.getItem("usertoken");
        if (usertoken) {
            const reqBody = {
                productId: productId,
            };

            const reqHeader = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${usertoken}`,
            };
            const result = await addToCartSubmitAPI(reqBody, reqHeader);
            if (result.status === 200) {
                setUserAddCartProductResponse(result.data.updateresponse)
                toast.warning(result.data.message);

            } else {
                toast.warning(result.response.data);
            }
        } else {
            toast.warning("Please Login");
        }
    };

    const addToWishListSubmit = async (productId) => {
        const usertoken = sessionStorage.getItem("usertoken");
        if (usertoken) {
            const reqBody = {
                productId: productId,
            };

            const reqHeader = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${usertoken}`,
            };
            const result = await addToWishListSubmitAPI(reqBody, reqHeader);
            if (result.status === 200) {
                setUserAddWishlistProductResponse(result.data.updateWishlistResponse)
                toast.warning(result.data.message);
            } else {
                toast.warning(result.response.data);
            }
        } else {
            toast.warning("Please Login");
        }
    };

    // console.log("kooooiiiii",mainImage)

    return (
        <div className="min-h-screen grid sm:grid-cols-8 bg-gradient-to-tr from-slate-50 to-slate-400">
            {singleProductState?.uploadimages ? (
                <div className=" col-span-1 flex flex-col gap-3 justify-center items-center pt-24">
                    {singleProductState?.uploadimages?.map((data) => (
                        <img
                            className=" min-h-[20%] rounded-2xl max-h-[20%] min-w-[90%] max-w-[90%]"
                            onClick={() => setMainImage(data)}
                            src={`${BASE_URL}/images/${data}`}
                        ></img>
                    ))}
                </div>
            ) : (
                <div className=" col-span-1 flex flex-col gap-5 justify-center items-center pt-24">
                    <img
                        className="min-h-[20%] max-h-[20%] min-w-[90%] max-w-[90%]"
                        src="https://static.itavisen.no/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-20.14.57.png"
                    ></img>
                    <img
                        className="min-h-[20%] max-h-[20%] min-w-[90%] max-w-[90%]"
                        src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/09/iPhone-15-series.jpg?ssl=1&quality=80&w=800"
                    ></img>
                    <img
                        className="min-h-[20%] max-h-[20%] min-w-[90%] max-w-[90%]"
                        src="https://static.itavisen.no/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-20.14.57.png"
                    ></img>
                    <img
                        className="min-h-[20%] max-h-[20%] min-w-[90%] max-w-[90%]"
                        src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/09/iPhone-15-series.jpg?ssl=1&quality=80&w=800"
                    ></img>
                </div>
            )}

            <div className=" col-span-3 flex justify-center items-center mt-32">
                <div className=" w-[90%] rounded-xl h-[100%] sm:h-[50%] lg:h-[90%] ">
                    <img
                        className="h-[100%] rounded-xl w-[100%]"
                        src={`${BASE_URL}/images/${mainImage}`}
                    ></img>
                </div>
            </div>
            <div className=" col-span-4  flex  flex-col justify-center mt-24 items-center">
                <div className="text-4xl text-zinc-400 lg:text-8xl font-bold mb-10">
                    {singleProductState?.title}
                </div>
                <div className="text-4xl lg:text-7xl text-slate-500 font-bold mb-10">
                    {singleProductState.price} ₹
                </div>
                <div>{singleProductState.description}</div>
                <div className="flex gap-5 mt-10">
                    <button
                        onClick={() => addToCartSubmit(singleProductState._id)}
                        className="bg-slate-400 text-white text-lg hover:scale-[1.1] duration-1000 rounded-lg w-[120%]  font-medium"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={() => addToWishListSubmit(singleProductState._id)}
                        className="bg-slate-400 text-white w-[120%] hover:scale-[1.1] duration-1000 rounded-lg font-medium"
                    >
                        Add to WishList
                    </button>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
}

export default SingleProduct;
