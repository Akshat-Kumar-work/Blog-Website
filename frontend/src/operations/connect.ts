import axios from "axios";

export const URL = import.meta.env.VITE_BASEURL ;

const instance = axios.create();

export const apiConnector = (method:string,url:string,body?:{}|null,headers?:any,params?:string )=>{
   
      return instance ({
        method:`${method}`,
        baseURL: `${url}`,
        data: body,
        headers: headers?headers:null,
        params: params
      });
}

