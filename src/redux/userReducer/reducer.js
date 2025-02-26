import { UserUpdated } from "./actions";

const initState={
    id:1,
    name:"mohamed",
    lastname:"jebbanema"
}

const UserReducer=(state=initState,action)=>
{

    const {playload,type}=action;
    switch (type) {
        case UserUpdated:
            return {
                ...state,
                user:{
                    name:playload.name,
                    lastname:playload.lastname
                }
            }    
        default:
            return state;
    }

}

export default UserReducer;