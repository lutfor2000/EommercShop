import { createSlice } from "@reduxjs/toolkit";

//------Initial State----
const initialState = {
    isAuthenticated : false, //user login
    isLoading : false, //data load
    user : null //user info
}


//---------createSlice--------
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setUser : (state,action) =>{

        }
    }
})


export const {setUser} = authSlice.actions;
export default authSlice.reducer