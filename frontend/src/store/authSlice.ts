import { createSlice } from "@reduxjs/toolkit";

const initialState ={
   user:null,
   token: null,
   login:false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
        },
        setToken:(state,action)=>{
            state.token = action.payload
        },
        setLogin:(state,value)=>{
            state.login = value.payload
        }
    }
});

export const { setUser,setToken,setLogin }  = authSlice.actions;
export default authSlice.reducer;