import axios from 'axios/index';

const url = "http://localhost:9000";

const getPosts = async () => {
    const data = [];
    await axios.get(url + '/posts')
        .then((response) => {
            data.push(response.data);
        })
        .catch((error) => {
            return {
                status: 'error',
                message: error.response.data.error.message
            }
        })
    return {
        status: 'success',
        data: data
    }
}

export { getPosts }