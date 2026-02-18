import { useLoaderData } from "react-router";

const Todo = () => {
    const todo = useLoaderData();

    console.log(todo);

    return (
        <div className="mt-4 border border-gray-300 shadow-2xl flex flex-col m-2">
            <div>
                <h3 className="text-2xl p-2 text-center font-semibold">{todo.title}</h3>
                <hr className="text-gray-300"></hr>
                <p className="text-sm p-2">{todo.description}</p>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        {
                            todo.isCompleted ? (
                                <div className="flex justify-start gap-2 p-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 accent-green-600"
                                        checked={todo.isCompleted}
                                        readOnly
                                    />
                                    <p>
                                        Completed
                                    </p>
                                </div>
                            ) : (
                                <div className="flex justify-start gap-2 p-2">
                                    <input
                                        type="checkbox"
                                        className="w-4"
                                        checked={todo.isCompleted}
                                        readonly
                                    />
                                    <p>
                                        Incomplete
                                    </p>
                                </div>
                            )
                        }
                    </div>

                    <div className="flex justify-center items-center text-sm text-gray-500">
                        {
                            new Date(todo.createdAt).toLocaleDateString("en-IN")
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;