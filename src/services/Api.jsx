import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const homePageData = async () => {
  return await commonRequest("GET", BASE_URL, "");
};

export const allProducts = async () => {
  return await commonRequest("GET", `${BASE_URL}/products`, "");
};

export const getSingleProduct = async (id) => {
  return await commonRequest("GET", `${BASE_URL}/products/${id}`, "");
};

export const addUser = async (data, header)=>{
return await commonRequest("POST", `${BASE_URL}/register`, data, header)
}

export const validateUser = async(data, header)=>{
    return await commonRequest("POST", `${BASE_URL}/login`, data, header, true)
}

export const logout = async()=>{
    return await commonRequest("GET", `${BASE_URL}/logout`,"", "", true)
}

export const getWishedItems = async(header) => {
    return await commonRequest("GET", `${BASE_URL}/wishlist`,"", header, true)
}
export const addWishedItems = async(id, header) => {
    return await commonRequest("POST", `${BASE_URL}/wishlist/add`,id,header, true)
}
export const deleteWishedItems = async(id, header) => {
    return await commonRequest("DELETE", `${BASE_URL}/wishlist/delete/${id}`,{}, header)
}