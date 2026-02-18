// todos loader
// loaders -> javascript functions
// it prepares the data before the component starts rendering

import axios from "axios";

// create a loader
const todosLoader = async () => {
    // perform the api call
    // to fetch the list of all todos
    const response = await axios
        .get('https://698dd177b79d1c928ed6a345.mockapi.io/todos')
    return response.data || [];
}

// export the loader
export default todosLoader;