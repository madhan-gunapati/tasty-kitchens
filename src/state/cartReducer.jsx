import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        count:0,
        items:{}
    },
    reducers:{
        'add':(state, action)=>{
            const id =action.payload.id
            if(state.items[id] === undefined){
            state.items[id] = action.payload
            state.count += 1
            }
            else{
                state.items[id].quantity += 1
            }
            
            
        },
        'remove':(state, action)=>{
            const {id} = action.payload
           
            if(state.items[id] !== undefined){
                if(state.items[id].quantity === 1){
                    delete state.items[id]
                    if(state.count >1){
                    state.count -= 1
                    }
                    else{
                        state.count = 0
                    }
                }
                else{
                state.items[id].quantity -= 1
                }
            }

        },
        'empty_cart':(state)=>{
                state.count = 0;
                 state.items = {}
        }
    }

})

export default cartSlice.reducer

export const {add , remove , empty_cart} = cartSlice.actions

export const cartSelector = (state)=>{
   const items =  state.cartSlice.items
   
   const ItemsArray = []
   for (let x in items){
    ItemsArray.push(items[x])
   }
   return ItemsArray

}