import { useSelector } from "react-redux";
import { booksFailure, booksFetched, booksRequest } from "../redux/booksRedux/actions";
import useDispatchedAction from "./useDispatchedAction";
import { useEffect } from "react";
import axios from "axios";

const useBooks = () => {

    const handleFetchBooksSucess = useDispatchedAction(booksFetched); 
    const handleFetchBooksRequest = useDispatchedAction(booksRequest);
    const handleFetchBooksFailure = useDispatchedAction(booksFailure);

    const booksData=useSelector((store)=>store.books);
    useEffect(()=>{
        handleFetchBooksRequest();
        axios.get('https://api.potterdb.com/v1/books')
        .then(function (response) {
            handleFetchBooksSucess(response.data.data);
        })
        .catch(function (error) {
            handleFetchBooksFailure(error);
        })
 
    },[]);

    return {booksData};
}

export default useBooks;