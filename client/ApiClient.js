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
  deleteTask: async (taskId) => {
    console.log('deleting task with id', taskId);
    return fetchData(`/tasks/${taskId}`, {
      method: 'DELETE',
    });
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
};

const fetchData = (path, options) => {
  return fetch(BASE_URL + path, options)
    .then(res => res.status < 400 ? res : Promise.reject(res))
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(error => {
      console.log('error', error);
    });
};

module.exports = ApiClient;