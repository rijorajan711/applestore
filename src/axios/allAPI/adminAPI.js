import { BASE_URL } from "../baseURL";
import { commonAPI } from "../commonAPI";


export const adminLogInAPI=async(reqBody)=>{

       return await commonAPI("POST",`${BASE_URL}/admin/login`,reqBody,"")
}

export const adminAddProductAPI=async(reqBody,reqHeader)=>{

      return await commonAPI("POST",`${BASE_URL}/admin/addproduct`,reqBody,reqHeader)
}

export const adminGetAllProductAPI=async()=>{
      return await commonAPI("GET",`${BASE_URL}/admin/getproduct`,"","")
}


export const adminDeleteProductAPI=async(reqBody,reqHeader)=>{
      return await commonAPI("DELETE",`${BASE_URL}/admin/deleteproduct`,reqBody,reqHeader)

}


export const adminGetAllUsersAPI=async(reqHeader)=>{
      return await commonAPI("GET",`${BASE_URL}/admin/getallusers`,"",reqHeader)
}

export const adminDeleteTheUserAPI=async(reqBody,reqHeader)=>{
      return await commonAPI("DELETE",`${BASE_URL}/admin/userdelete`,reqBody,reqHeader)
}


export const blockAndUnblockUserAPI=async(reqBody,reqHeader)=>{
      return await commonAPI("PATCH",`${BASE_URL}/admin/blockandunblockuser`,reqBody,reqHeader)
}

export const adminProductUpdationSubmitAPI=async(reqBody,reqHeader)=>{
      return await commonAPI("PUT",`${BASE_URL}/admin/adminProductUpdationSubmit`,reqBody,reqHeader)
}


export const adminAddTrendingProductAPI=async(reqBody,reqHeader)=>{

      return await commonAPI("POST",`${BASE_URL}/admin/addtrndingproduct`,reqBody,reqHeader)
}

export const adminGetAllTrendingProductAPI=async()=>{
      return await commonAPI("GET",`${BASE_URL}/admin/gettrendingproduct`,"","")
}

export const adminDeleteTrendingProductAPI=async(reqBody,reqHeader)=>{
      return await commonAPI("DELETE",`${BASE_URL}/admin/deletetrendingproduct`,reqBody,reqHeader)

}


export const adminTrendingProductUpdationSubmitAPI=async(reqBody,reqHeader)=>{
      return await commonAPI("PUT",`${BASE_URL}/admin/admintrendingproductupdationsubmit`,reqBody,reqHeader)
}



