import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://698dd177b79d1c928ed6a345.mockapi.io/todos')
      .then(response => {
        setTodos(response.data);
      })
  }, []);

  return (
    <>
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