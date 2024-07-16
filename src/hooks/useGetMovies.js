import { useEffect } from 'react';
import { API_OPTIONS, GET_MOVIES } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../redux/movieSlice';

const useGetMovies = () => {
    const dispatch = useDispatch();

    const movieOptions = async () => {
        const data = await fetch(
            GET_MOVIES,
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };
    
    useEffect(() => {
        movieOptions();
    }, [])
}

export default useGetMovies;

