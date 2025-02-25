import TODO_STATE from "../../constant/sharedData";

const initState={
    todos:[
        {id:1,label:"math",etat:TODO_STATE.DONE},
        {id:2,label:"physics",etat:TODO_STATE.INPROGRESS}
    ],
    isLoading:false
}

const todoreducer=(state=initState,action)=>{
return state;
}

export default todoreducer;