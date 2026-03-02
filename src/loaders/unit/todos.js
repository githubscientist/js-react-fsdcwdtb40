// todos loader
// loaders -> javascript functions
// it prepares the data before the component starts rendering

// create a loader
const todosLoader = async () => {
    // perform the api call
    // to fetch the list of all todos
    let response = localStorage.getItem("todos") || [];
    if (response == null) {
        return [];
    } else {
        return JSON.parse(response);
    }
}

// export the loader
export default todosLoader;