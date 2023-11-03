import axios from 'axios';

export const GET_API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
export const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const getAPI = async () => {
  try {
    const response = await axios.get(GET_API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postAPI = async () => {
  try {
    // const response = await axios.post(POST_API_URL);
    // return response.data;
    const response =await axios.post(POST_API_URL,{
        "title": "Pankaj Tomar",
        "body": "Pankaj Tomar is the best Developer",
    })
    return response.data;
  } catch (error) {
    throw error;
  }
};
