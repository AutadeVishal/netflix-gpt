import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice(
    {
        name:'user',
        initialState:null,
        reducers:{
            addUser:(state,action)=>{
               return action.payload;
            },
            removeUser:()=>{
             //returning updatesthe  initialState variable if you dont directly want to modify
                return null;
            }
        }
    }
)
export default userSlice.reducer;
export const {addUser,removeUser}=userSlice.actions;