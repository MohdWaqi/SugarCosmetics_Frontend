import axios from "axios";

export const commonRequest = async (methods, url, body, header, check) => {
  let config = {
    method: methods,
    url,
    headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    withCredentials: check ? check : false,
    data: body,
  };

  return axios(config);
};
