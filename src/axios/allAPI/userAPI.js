
import { BASE_URL } from "../baseURL";
import { commonAPI } from "../commonAPI";



export const userSignInAPI=async(reqBody)=>{
       return await commonAPI("POST",`${BASE_URL}/user/signin`,reqBody,"")
}

export const userLoginAPI=async(reqBody)=>{
     return await commonAPI('POST',`${BASE_URL}/user/login`,reqBody,"")
}

export const userGetAllProductAPI=async(searhKey)=>{

   
    return await commonAPI("GET",`${BASE_URL}/user/getproduct?search=${searhKey}`,"","")
}

export const userGetCategoryProductAPI=async(reqBody)=>{
    console.log("INSIDE userGetCategoryProductAPI",reqBody)
    return await commonAPI("POST",`${BASE_URL}/user/getproductcategory`,reqBody,"")
}

export const addToCartSubmitAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/addtocart`,reqBody,reqHeader)
}

export const getCartProductsAPI=async(reqHeader)=>{
   
    return await commonAPI("GET",`${BASE_URL}/user/getcartproduct`,"",reqHeader)
}

export const removeProductFromCartSubmitAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/removeproductfromcart`,reqBody,reqHeader)
}


export const increDecreSubmitAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/incredecrecartquantity`,reqBody,reqHeader)
}


export const addToWishListSubmitAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/addtowishlist`,reqBody,reqHeader)
}

export const getWishlistProductsAPI=async(reqHeader)=>{
     console.log("inside getWishlistProductsAPI")
    return await commonAPI("GET",`${BASE_URL}/user/getwishlistproduct`,"",reqHeader)
}


export const removeProductFromWishlistSubmitAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/removeproductfromwishlist`,reqBody,reqHeader)
}

export const placeOrderSubmitAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PATCH",`${BASE_URL}/user/placeordersubmit`,reqBody,reqHeader)
}


export const getAllOrderAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/getallorder`,"",reqHeader)
}


export const userGetAllTrendingProductAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/gettrendingproduct`,"","")
}


