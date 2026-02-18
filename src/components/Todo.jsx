import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Todo = () => {

    const { id } = useParams();
    const [todo, setTodo] = useState({});

    const fetchTodo = async () => {
        const response = await axios.get(`https://698dd177b79d1c928ed6a345.mockapi.io/todos/${id}`);
        setTodo(response.data);
    }

    useEffect(() => {
        fetchTodo();
    }, [id]);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    return (
        <div className="mt-4">
            Todo
        </div>
    )
}

export default Todo;