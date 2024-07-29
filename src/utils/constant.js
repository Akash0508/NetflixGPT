export const LOGO =
    'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const AVATAR =
    'https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229';

export const BACKGROUND =
    'https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg';

export const SUPPORTED_LANGUAGES = [
    { identifier: 'en', name: 'english' },
    { identifier: 'hindi', name: 'hindi' },
    { identifier: 'bhojpuri', name: 'bhojpuri' },
];

export const OPENAI_KEY = "'" + process.env.REACT_APP_OPENAI_KEY + "'";

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
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    },
};
