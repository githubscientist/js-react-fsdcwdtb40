import { NavLink } from "react-router";

const SideBar = () => {
    return (
        <div className="ml-8">
            <ul>
                <li>
                    <NavLink
                        to={"/dashboard/todos"}
                        className={({ isActive }) => {
                            return isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"
                        }}
                    >
                        All Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/dashboard/createTodo"}
                        className={({ isActive }) => {
                            return isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"
                        }}
                    >
                        Create Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/dashboard/updateTodo"}
                        className={({ isActive }) => {
                            return isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"
                        }}
                    >
                        Update Todo
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;