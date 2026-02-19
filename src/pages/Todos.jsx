import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router";

const Todos = () => {
    const todos = useLoaderData();

    const [search, setSearch] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="search todos..."
                className="border border-gray-300 p-2 w-sm mb-8"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

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
                                        .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
                                        .map(todo => (
                                            <li key={todo.id}>
                                                <Link
                                                    className="hover:underline"
                                                    to={`/dashboard/todos/todo/?id=${todo.id}`}
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