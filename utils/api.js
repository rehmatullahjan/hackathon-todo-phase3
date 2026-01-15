import axios from 'axios';

const api = axios.create({
    baseURL: '/api', // Relative path for Vercel deployment
    headers: {
        'Content-Type': 'application/json',
    },
});

export const chatWithTodo = async (message) => {
    const response = await api.post('/chat', { message });
    return response.data;
};

export default api;
