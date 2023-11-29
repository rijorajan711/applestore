import axios from "axios"


export const commonAPI=async(method,url,reqBody,reqHeader)=>{
    // console.log(reqBody)
    const config={
        method:method,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
        


               return await axios(config).then((result)=>{
                      return result
               }).catch((err)=>{
                   return err
               })
        

            }



               
