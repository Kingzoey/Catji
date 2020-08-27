import axios from 'axios';

export async function register(nickname, email, phone, password) {
    let res = await axios.post('/api/Users/register', {
        nickname, email, phone, password
    });
    return res;
}

export async function login(email, phone, password) {
    let res = await axios.post('/api/Users/login', {
        email, phone, password
    });
    return res;
}

export async function info(usid) {
    let res = await axios.get('/api/Users', {
        usid
    });
    return res;
}

export async function logout() {
    // let res = await axios.post('/api/Users/logout');
    let res = Promise.resolve();
    return res;
}