
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
    // console.log("INSIDE userGetCategoryProductAPI",reqBody)
    return await commonAPI("POST",`${BASE_URL}/user/getproductcategory`,reqBody,"")
}

export const addToCartSubmitAPI=async(reqBody,reqHeader)=>{
   
    return await commonAPI("PATCH",`${BASE_URL}/user/addtocart`,reqBody,reqHeader)
}

export const getCartProductsAPI=async(reqHeader)=>{
    //   console.log("getCartProductsAPI",reqHeader)
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
    //  console.log("inside getWishlistProductsAPI")
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

export const sendPastedTokenAPI=async(reqHeader)=>{
    // console.log("console.log from sendPastedTokenAPI",reqHeader)
    return await commonAPI("POST",`${BASE_URL}/user/nodemailerpatsedtoken`,{},reqHeader)
}

export const getSingleProductAPI=async(reqBody)=>{

    // console.log("product id from front end API",reqBody)
    return await commonAPI("POST",`${BASE_URL}/user/getsingleproduct`,reqBody,"")
}

export const getCartCountAPI=async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/getcartcount`,"",reqHeader)
}

export const getWishlistCountAPI=async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/getwishlistcount`,"",reqHeader)
}
