import {createSlice, nanoid} from "@reduxjs/toolkit";


const initialState=[]
const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo: (state, {payload}) => {
                let capitalText = payload.text[0]
                .toUpperCase() + 
                payload.text.substring(1)
                const newTodo = {
                    id:nanoid(),
                    text:capitalText,
                    completed:false,
                } 
                state.unshift(newTodo)
            },
        editTodo:(state, {payload}) => {
            const {id, text, completed} = payload
            const oldTodo = state.find((todo) => todo.id===id)
            if (oldTodo){
                oldTodo.text=text
                oldTodo.completed=completed
            }
        }, 
        toggleComplete:(state, {payload}) => {
            const index = state.find((todo) => todo.id===payload.id)
            state[index].completed=payload.completed
        },
        deleteTodo:(state, {payload}) => {
            return state.filter((todo) => todo.id!==payload.id)

        }
      
    }

})
export const {
    addTodo,
    editTodo,
    toggleComplete,
    deleteTodo
} = todoSlice.actions

export default todoSlice.reducer
 
