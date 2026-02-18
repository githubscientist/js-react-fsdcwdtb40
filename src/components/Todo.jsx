import { useParams } from "react-router";

const Todo = () => {

    const { id } = useParams();

    console.log(id);

    return (
        <div className="mt-4">
            Todo
        </div>
    )
}

export default Todo;