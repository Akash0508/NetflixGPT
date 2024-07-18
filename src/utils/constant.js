export const LOGO =
    'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const AVATAR =
    'https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229';

export const GET_MOVIE_BACKGROUND = (id) => {
    return (
        'https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US'
    );
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTVmZjRmOWJiMDk3YTg5M2QyOGFiNmE1NjBjNzFlNSIsIm5iZiI6MTcyMTExODgzOC42NTA1MjgsInN1YiI6IjY2OTYyZjA0NDFkZGFjMTU0YjdiODgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PBFFGGGF-iXle17_uDfzXLhtZ3nY0u57NY7alojWXn4',
    },
};
