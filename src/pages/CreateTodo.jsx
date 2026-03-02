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
        let todos = localStorage.getItem("todos") || [];
        todos = JSON.parse(todos);

        // prepare the data to be created
        const newTodo = {
            title: title,
            description: description,
            isCompleted: status == 'Incomplete' ? false : true,
            id: todos.length > 0 ? parseInt(todos[todos.length - 1].id) + 1 : 1,
            createdAt: new Date()
        }

        todos.push(newTodo);

        // set this as the new todos in localStorage
        localStorage.setItem("todos", JSON.stringify(todos));

        toast.success("Todo created!");

        navigate("/dashboard/todos");
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