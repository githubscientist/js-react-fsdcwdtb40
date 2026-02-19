import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateTodo = () => {
    const todo = useLoaderData();

    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.isCompleted ? 'Completed' : 'Incomplete');

    const navigate = useNavigate();

    const handleUpdateTodo = (e) => {
        e.preventDefault();

        // prepare the data to be created
        const newTodo = {
            title: title,
            description: description,
            isCompleted: status == 'Incomplete' ? false : true
        }

        // perform an update api call
        axios
            .put(`https://698dd177b79d1c928ed6a345.mockapi.io/todos/${todo.id}`, newTodo)
            .then(response => {
                toast.success('Todo updated');

                // navigate to the previous page
                navigate(-1);
            })
            .catch(error => {
                toast.error('Todo updation failed');
            })
    }

    return (
        <div>
            <h1 className="text-4xl p-4 ml-4">Update Todo</h1>
            <div className="xs:w-xs sm:w-sm md:w-xl mx-8 border p-4 border-gray-400 shadow-xl">
                <form
                    className="flex flex-col gap-7"
                    onSubmit={handleUpdateTodo}
                >
                    <input
                        type="text"
                        className="border w-full p-1"
                        placeholder="Title..."
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        className="border w-full p-1"
                        placeholder="Description..."
                        rows={5}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <select
                        className="border w-full p-1"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option value="Incomplete">Incomplete</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <button
                        type="submit"
                        className="border p-2 bg-slate-500 hover:bg-slate-700 text-white cursor-pointer"
                    >Update Todo</button>
                </form>
            </div>
        </div >
    )
}

export default UpdateTodo;