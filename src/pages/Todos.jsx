import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // perform the api call
        // to fetch the list of all todos
        axios
            .get('https://698dd177b79d1c928ed6a345.mockapi.io/todos')
            .then(response => {
                setTodos(response.data);
            });

    }, []);

    return (
        <div>
            <h1 className="text-3xl">Todos</h1>
            {
                todos.length == 0 ? (
                    <>
                        <p className="text-sm p-1">
                            No Todos Found. Start creating todos.
                        </p>
                        <button className="border p-1 text-sm px-2 hover:bg-gray-300 hover:cursor-pointer">Create Todo</button>
                    </>
                ) :
                    (
                        <div className="flex flex-row gap-10">
                            <ul className="space-y-3 list-disc pl-10 mt-4">
                                {
                                    todos
                                        .map(todo => (
                                            <li key={todo.id}>
                                                <Link
                                                    className="hover:underline"
                                                    to={`/dashboard/todos/todo/${todo.id}`}
                                                >
                                                    {todo.title}
                                                </Link>
                                            </li>
                                        ))
                                }
                            </ul>

                            <Outlet />
                        </div>
                    )
            }
        </div>
    )
}

export default Todos;