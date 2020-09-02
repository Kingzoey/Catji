import axios from 'axios';
// import qs from 'querystring';

axios.defaults.baseURL = "https://myweb1008.xyz:12340";

axios.defaults.withCredentials = true;

var debug = false;
if (debug) {
    axios.defaults.baseURL = "http://localhost:7843";
}

export const hotSearch = () => axios.get('/api/searchhistories/hotlist');

export const searchHistory = (usid) => axios.get('/api/searchhistories/content', {
    params: { usid }
});

export const hotTag = () => axios.get('/api/tags/hotlist');

export const hotUser = () => axios.get('/api/users/hotlist');

export const hotVideo = () => axios.get('/api/videos/hotlist');

export const newVideo = () => axios.get('/api/videos/newlist');

export const register = (nickname, email, phone, password) => axios.post('/api/users/register', {
    nickname, email, phone, password
});

export const login = (nickname, email, phone, password) => axios.post('/api/users/login', {
    nickname, email, phone, password
});

export const logout = () => axios.post('/api/users/logout');

export const loginInfo = () => axios.get('/api/users');


export const videoInfo = (vid) => axios.get('/api/videos/info', {
    params: { vid }
});

export const userInfo = (usid) => axios.get('/api/users/info', {
    params: { usid }
});

export const blogInfo = (usid, page) => axios.get('/api/blogs/info', {
    params: { usid, page: page || 0 }
});

export const follow = (usid) => axios.post('/api/follows/follow', {
    params: { usid }
});

export const followers = (usid, page) => axios.get('/api/follows/followers', {
    params: { usid, page: page || 0 }
});

export const followings = (usid, page) => axios.get('/api/follows/following', {
    params: { usid, page: page || 0 }
});

/**
 * @param {string|Blob} avatarFile 
 */
export const changeAvatar = (avatarFile) => {
    // 不知道能不能用, 谁来调试一下
    var formdata = new FormData();
    formdata.append('avatar', avatarFile);
    return axios.get('/api/users/changeavatar', formdata);
}

// 或许可以改成可选参数
export const updateInfo = (usid, email, tel, nickname, password, gender, birthday, signature, cat_id) => axios.post('/api/users/updateinfo', {
    usid, email, tel, nickname, password, gender, birthday, signature, cat_id
});

export const myFavorite = (page) => axios.get('/api/favorites/info', {
    params: { page: page || 0 }
});

export const watchHistory = (page) => axios.get('/api/watchhistories/info', {
    params: { page: page || 0 }
});

export const myWork = (usid, page) => axios.get('/api/videos/own', {
    params: { usid, page: page || 0 }
});

export const tagVideos = (tag_id, page) => axios.get('/api/tags/videos', {
    params: { tag_id, page: page || 0 }
});

export const tagBlogs = (tag_id, page) => axios.get('/api/tags/blogs', {
    params: { tag_id, page: page || 0 }
});

export const catInfo = (cat_id) => axios.get('/api/cats/info', {
    params: { cat_id }
});

export const catVideo = (cat_id, page) => axios.get('/api/cats/videos', {
    params: { cat_id, page: page || 0 }
});

export const catBlog = (cat_id, page) => axios.get('/api/cats/blogs', {
    params: { cat_id, page: page || 0 }
});

export const videoComments = (vid, page) => axios.get('/api/videos/comments', {
    params: { vid, page: page || 0 }
});

export const blogContent = (only_cat) => axios.get('/api/blogs/content', {
    params: { only_cat }
});

/**
 * @param {HTMLFormElement} formdata 
 */
export const postBlog = (formdata) => {
    // 这里不太确定
    return axios.post('/api/blogs/release', formdata);
};

export const searchVideo = (keyword, page) => axios.get('/api/videos/search', {
    params: { keyword, page: page || 0 }
});

export const searchUser = (keyword, page) => axios.get('/api/users/search', {
    params: { keyword, only_cat: false, page: page || 0 }
});

export const searchCat = (keyword, page) => axios.get('/api/users/search', {
    params: { keyword, only_cat: true, page: page || 0 }
});

export const searchTag = (keyword, page) => axios.get('/api/tags/search', {
    params: { keyword, page: page || 0 }
});

/**
 * @param {HTMLFormElement} formdata 
 */
export const uploadVideo = (formdata) => {
    // 这里不太确定
    return axios.post('/api/videos/release', formdata);
}