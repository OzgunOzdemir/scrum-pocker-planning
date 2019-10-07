import axios from 'axios/index';

const url = "http://localhost:9000";

const addStory = async (data) => {
    const result = [];
    await axios.post(url + '/stories', {
        sessionName: data.sessionName,
        voterCount: data.voterCount
    })
        .then((response) => {
            result.push(response.data);
        })
        .catch((error) => {
            return {
                status: 'error',
                message: error.response.data.error.message
            }
        })
    return {
        status: 'success',
        data: result[0]
    }
}

const getStory = async () => {
    const result = [];
    await axios.get(url + '/stories')
        .then((response) => {
            result.push(response.data);
        })
        .catch((error) => {
            return {
                status: 'error',
                message: error.response.data.error.message
            }
        })
    return {
        status: 'success',
        data: result[0]
    }
}

export { addStory, getStory }