import { BASE_URL } from "../baseURL";
import { commonAPI } from "../commonAPI";



export const userSignInAPI=async(reqBody)=>{
       return await commonAPI("POST",`${BASE_URL}/user/signin`,reqBody,"")
}

export const userLoginAPI=async(reqBody)=>{
     return await commonAPI('POST',`${BASE_URL}/user/login`,reqBody,"")
}

export const userGetAllProductAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/getproduct`,"","")
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