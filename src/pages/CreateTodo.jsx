import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const CreateTodo = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Incomplete');

    const navigate = useNavigate();

    const handleAddTodo = (e) => {
        e.preventDefault();

        // prepare the data to be created
        const newTodo = {
            title: title,
            description: description,
            isCompleted: status == 'Incomplete' ? false : true
        }

        // perform an api call
        axios
            .post(`https://698dd177b79d1c928ed6a345.mockapi.io/todos`, newTodo)
            .then(response => {
                toast.success('Todo Created');

                // redirect the user to the /todos page
                setTimeout(() => {
                    navigate('/dashboard/todos');
                }, 500);
            })
            .catch(error => {
                toast.error('Todo creation failed:', error.message);
            });
    }

    return (
        <div>
            <h1 className="text-4xl p-4 ml-4">New Todo</h1>
            <div className="xs:w-xs sm:w-sm md:w-xl mx-8 border p-4 border-gray-400 shadow-xl">
                <form
                    className="flex flex-col gap-7"
                    onSubmit={handleAddTodo}
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
                    >Add Todo</button>
                </form>
            </div>
        </div >
    )
}

export default CreateTodo;