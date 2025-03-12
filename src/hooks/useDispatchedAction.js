import { useDispatch } from "react-redux";

const useDispatchedAction = (action) => {
    const dispatch = useDispatch();
    
    const dispatchedAction = (...args) => {
        dispatch(action(...args));
    }
    return dispatchedAction;
}
export default useDispatchedAction;