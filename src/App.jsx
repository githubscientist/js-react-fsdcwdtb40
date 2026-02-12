import axios from "axios";
import { useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get('https://698dd177b79d1c928ed6a345.mockapi.io/todos')
      .then(response => {
        setTodos(response.data);
      })
  }

  console.log(todos);

  return (
    <>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <h1>Todos</h1>
      <ul>
        {
          todos
            .map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))
        }
      </ul>
    </>
  )
}

export default App;