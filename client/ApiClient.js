/* eslint-disable prettier/prettier */
const BASE_URL = 'http://192.168.8.104:3003';

const ApiClient = {
  getAllTasks: async () => {
    try {
      const result = await fetch(BASE_URL + '/tasks');
      const dbtasks = await result.json();
      return dbtasks;
    } catch (error) {
      console.log('error', error);
      return [];
    }
  },
  postTask: async (body) => {
    return fetchData('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  },
  deleteTask: async (taskId) => {
    return fetchData(`/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  updateTaskStatus: async (taskId, status) => {
    return fetchData(`/tasks/${taskId}?isComplete=${status}`, {
      method: 'PUT',
      headers: {
        "Content-Type":"application/json"
      },
    });
  },
};

const fetchData = (path, options) => {
  return fetch(BASE_URL + path, options)
    .then(res => res.json())
    // .then(res => {
    //   console.log('Response is', res);
    //   return res.status < 400 ? res : Promise.reject(res);
    // })
    .catch(error => {
      console.log('fetch error', error);
    });
};

module.exports = ApiClient;