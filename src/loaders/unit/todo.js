import axios from "axios";

const todoLoader = async ({ params }) => {
    const { id } = params;

    const response = await axios.get(`https://698dd177b79d1c928ed6a345.mockapi.io/todos/${id}`);
    return response.data || {};
}

export default todoLoader;