import axios, { AxiosHeaders } from "axios";

export const URL = import.meta.env.VITE_BASEURL ;

export const apiConnector = (method:string,url:string,body?:{},headers?:AxiosHeaders,params?:string )=>{
    console.log("url",url)
        const instance = axios.create()({
        method:method,
        baseURL: url,
        data: body,
        headers: headers,
        params: params
      });

      return instance;
}

