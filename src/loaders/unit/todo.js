const todoLoader = async ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    let todos = localStorage.getItem("todos") || [];
    // convert the JSON string into a JS object
    todos = JSON.parse(todos);
    return todos.find(todo => todo.id == id) || {};
}

export default todoLoader;