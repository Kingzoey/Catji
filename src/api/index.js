import axios from 'axios';

export async function register(nickname, email, phone, password) {
    let res = await axios.get('/api/Users/register', {
        data: {
            nickname, email, phone, password
        }
    });
    return res;
}
