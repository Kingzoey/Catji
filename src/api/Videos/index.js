import axios from 'axios';

export async function videoInfo(vid) {
    let res = await axios.post('/api/Videos/info', {
        data: {
            vid
        }
    });
    return res;
}
