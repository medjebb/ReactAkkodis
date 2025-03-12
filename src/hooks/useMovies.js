import { useEffect } from "react";
import { moviesFailure, moviesFetched, moviesRequest } from "../redux/moviesRedux/actions"
import useDispatchedAction from "./useDispatchedAction"
import { useSelector } from "react-redux";
import axios from "axios";

const useMovies = () => {

    const handleFetchMoviesFailure =useDispatchedAction(moviesFailure);
    const handleFetchedMoviesRequest =useDispatchedAction(moviesRequest);
    const handleFetchedMoviesSuccess =useDispatchedAction(moviesFetched);
    const moviesData=useSelector((store)=>store.movies);
    useEffect(()=>{
        handleFetchedMoviesRequest();
        axios.get('https://api.potterdb.com/v1/movies')
        .then(function (response) {
            handleFetchedMoviesSuccess(response.data.data);
        })
        .catch(function (error) {
            handleFetchMoviesFailure(error);
        })
    },[]);

    return moviesData;
}

export default useMovies;