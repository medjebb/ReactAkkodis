import TODO_STATE from "../../constant/sharedData";
import { DEELETE_TODO, delete_todo } from "./actions";

const initState={
    todos:[
        {id:1,label:"math",etat:TODO_STATE.DONE},
        {id:2,label:"physics",etat:TODO_STATE.INPROGRESS}
    ],
    isLoading:false
}

const todoreducer=(state=initState,action)=>{
    const {playload,type} =action;

    switch (action) {
        case DEELETE_TODO:
            return {
                ...state,
                todos:state.todos.filter(todo=> todo.id!== playload.id)
            };
            break;
    
        default:
            break;
    }
return state;


}

export default todoreducer;