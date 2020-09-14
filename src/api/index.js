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

export const hotCat = () => axios.get('/api/cats/hotlist');

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
}).then(res => {
    if (res.data.status === 'ok') {
        res.data.data.birthday = new Date(res.data.data.birthday * 1000);
    }
    return res;
});

export const blogInfo = (usid, page) => axios.get('/api/blogs/info', {
    params: { usid, offset: page * 10 || 0 }
});


export const followers = (usid, page) => axios.get('/api/follows/followers', {
    params: { usid, offset: (page || 0) * 10 }
});

export const followings = (usid, page) => axios.get('/api/follows/following', {
    params: { usid, offset: (page || 0) * 10 }
});

// /**
//  * @param {string|Blob} avatarFile 
//  */
// export const changeAvatar = (avatarFile) => {
//     // 不知道能不能用, 谁来调试一下
//     return axios.get('/api/users/changeavatar', formdata);
// }

/**
 * @param {Object} params - 请求参数
 * @param {Number} params.usid - 用户id
 * @param {String} [params.email] - 用户邮箱
 * @param {String} [params.tel] - 用户手机号
 * @param {String} [params.nickname] - 用户名
 * @param {String} [params.password] - 用户密码
 * @param {String} [params.gender] - 男/女/?
 * @param {Date} [params.birthday] - 用户生日
 * @param {String} [params.signature] - 个性签名
 * @param {Blob} [params.avatar] - 头像文件
 * @param {String} [params.cat_id] - 绑定的猫Tag的id
 */
export const updateInfo = (params) => {
    var formdata = new FormData();
    for (const key in params) {
        if (key === 'birthday') {
            formdata.append(key, params[key] / 1000);
        } else {
            formdata.append(key, params[key]);
        }
    }
    return axios.post('/api/users/updateinfo', formdata);
}

export const myFavorite = (page) => axios.get('/api/favorites/info', {
    params: { page: page || 0 }
});

export const watchHistory = (page) => axios.get('/api/watchhistories/info', {
    params: { page: page || 0 }
});

export const myWork = (usid, page) => axios.get('/api/videos/own', {
    params: { usid, page: page || 0 }
});

export const tagInfo = (tag_id) => axios.get('/api/tags/name', {
    params: { tag_id }
})

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
 * 上传动态
 * @param {String} content - 动态内容
 * @param {Blob[]} images - 附带图片(<=9)
 * @param {bool} is_public - 是否公开
 */
export const postBlog = (content, images, is_public) => {
    var formData = new FormData();
    formData.append('content', content);
    images.forEach(image => formData.append('images', image));
    formData.append('is_public', (is_public ? 1 : 0));
    return axios.post('/api/blogs/release', formData);
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

export const uploadVideo = (title, desc, coverFile, videoFile, tags, catags) => {
    var formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('cover', coverFile);
    formData.append('video', videoFile);
    tags.forEach(tag => formData.append('tags', tag));
    catags.forEach(catag => formData.append('catags', catag));
    return axios.post('/api/videos/release', formData);
}

export const likeVideo = (vid) => axios.post('/api/Likevideos/addLikeV', { vid });

export const unlikeVideo = (vid) => axios.post('/api/Likevideos/unlikev', { vid });

export const likeBlog = (bid) => axios.post('/api/Likeblogs/addLikeB', { bid });

export const unlikeBlog = (bid) => axios.post('/api/Likeblogs/unLikeB', { bid });

export const likeVideoComment = (vcid) => axios.post('/api/Likevideocomments/addLikeVc', { vcid });

export const unlikeVideoComment = (vcid) => axios.post('/api/Likevideocomments/unLikeVc', { vcid });

export const likeBlogComment = (bcid) => axios.post('/api/Likeblogcomments/addLikeBc', { bcid });

export const unlikeBlogComment = (bcid) => axios.post('/api/Likeblogcomments/unLikeBc', { bcid });

export const follow = (usid) => axios.post('/api/follows/follow', { usid });

export const unfollow = (usid) => axios.post('/api/follows/unfollow', { usid });

export const block = (usid) => axios.post('/api/blocks/block', { usid });

export const unblock = (usid) => axios.post('/api/blocks/unblock', { usid });

export const favoriteVideo = (vid) => axios.post('/api/favorites/addfav', { vid });

export const unfavoriteVideo = (vid) => axios.post('/api/favorites/unfav', { vid });