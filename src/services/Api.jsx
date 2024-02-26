import { commonRequest } from "./ApiCall"
import { BASE_URL } from "./helper"


export const homePageData = async()=>{
    return await commonRequest(
        "GET",
        BASE_URL,
        ""
    )
}

export const allProducts = async()=>{
    return await commonRequest("GET", `${BASE_URL}/products`,"")
}

export const getSingleProduct = async(id)=>{
    return await commonRequest("GET", `${BASE_URL}/products/${id}`,"")
}