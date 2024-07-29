import { useEffect } from 'react';
import { API_OPTIONS, GET_MOVIE_BACKGROUND } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../redux/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const getMovieBackground = async () => {
        const data = await fetch(GET_MOVIE_BACKGROUND(movieId), API_OPTIONS);
        const json = await data.json();
        const filterData = json.results?.filter(
            (video) => video.type === 'Trailer'
        );
        if (!filterData) return;
        const trailer = filterData?.length ? filterData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    };
    useEffect(() => {
        !trailerVideo && getMovieBackground();
    }, []);
};

export default useMovieTrailer;
