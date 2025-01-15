import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todo:[{id:1,name:'task 1'},{id:2,name:'task 2'}],
    doing:[{id:3,name:'task 3'},{id:4,name:'task 4'}],
    done:[{id:5,name:'task 5'},{id:6,name:'task 6'}]
}

const todoSlice=createSlice({
    name:'todoSlice',
    initialState,
    reducers:{
        setTodo:(state,action)=>{
            state.todo=[...state.todo,action.payload]
        },
        removeTodo:(state,action)=>{
            state.todo=state.todo.filter((item)=>item.id!==action.payload)
        },
        setDoing:(state,action)=>{
            state.doing=[...state.doing,action.payload]
        },
        removeDoing:(state,action)=>{
            state.doing=state.doing.filter((item)=>item.id!==action.payload)
        },
        setDone:(state,action)=>{
            state.done=[...state.done,action.payload]
        },
        removeDone:(state,action)=>{
            state.done=state.done.filter((item)=>item.id!==action.payload)
        }
    }
})


export const {setTodo,removeTodo,setDoing,removeDoing,setDone,removeDone}=todoSlice.actions

export default todoSlice.reducer