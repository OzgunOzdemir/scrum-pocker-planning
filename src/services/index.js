import axios from "axios/index";

const url = "http://localhost:9000";

const addStory = async data => {
  const result = [];
  await axios
    .post(url + "/stories", {
      sessionName: data.sessionName,
      voterCount: data.voterCount
    })
    .then(response => {
      result.push(response.data);
    })
    .catch(error => {
      return {
        status: "error",
        message: error.response.data
      };
    });
  return {
    status: "success",
    data: result[0]
  };
};

const getStory = async () => {
  const result = [];
  await axios
    .get(url + "/stories")
    .then(response => {
      result.push(response.data);
    })
    .catch(error => {
      return {
        status: "error",
        message: error.response.data
      };
    });
  return {
    status: "success",
    data: result[0]
  };
};

const getStoryById = async id => {
  const result = [];
  await axios
    .get(url + "/stories/" + id)
    .then(response => {
      result.push(response.data);
    })
    .catch(error => {
      return {
        status: "error",
        message: error.response.data
      };
    });
  return {
    status: "success",
    data: result[0]
  };
};

const updateStoryByStatus = async id => {
  const result = [];
  await axios
    .put(url + "/stories/updateStatus/" + id)
    .then(response => {
      result.push(response.data);
    })
    .catch(error => {
      return {
        status: "error",
        message: error.response.data
      };
    });
  return {
    status: "success",
    data: result[0]
  };
};

const getVoterBySessionName = async sessionName => {
  const result = [];
  await axios
    .get(url + "/voters/" + sessionName)
    .then(response => {
      result.push(response.data);
    })
    .catch(error => {
      return {
        status: "error",
        message: error.response.data
      };
    });
  return {
    status: "success",
    data: result[0]
  };
};

const addVoter = async data => {
  const result = [];
  await axios
    .post(url + "/voters", {
      sessionName: data.sessionName,
      voterName: data.voterName,
      score: data.score
    })
    .then(response => {
      result.push(response.data);
    })
    .catch(error => {
      return {
        status: "error",
        message: error.response.data
      };
    });
  return {
    status: "success",
    data: result[0]
  };
};

export {
  addStory,
  getStory,
  updateStoryByStatus,
  getStoryById,
  getVoterBySessionName,
  addVoter
};
