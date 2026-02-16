import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {

  // 1. create a browser router object
  // root route: http://localhost:5173
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello, World!</h1>
    }
  ]);

  // 2. provide the router object as props to the component

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App;