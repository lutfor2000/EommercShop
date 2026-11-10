import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//------Initial State----
const initialState = {
    isAuthenticated : false, //user login
    isLoading : false, //data load
    user : null //user info
};

export const registerUser = createAsyncThunk('/auth/register',

    async(formData) =>{
        const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
            withCredentials : true
        }
    );

    return response.data;

    }

)


//---------createSlice--------
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setUser : (state,action) =>{},
    },

    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading = true;

        }).addCase(registerUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;

        }).addCase(registerUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
    }
})


export const {setUser} = authSlice.actions;
export default authSlice.reducer