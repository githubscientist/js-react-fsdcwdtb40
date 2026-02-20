import { createContext } from "react";
import Child1 from "./components/Child1";

// 1. create a context
export const UserContext = createContext();

const App = () => {

  // data is in the parent component: App
  const user = {
    email: "sathish@guvi.in"
  }

  // 2. provide the context
  return (
    <>
      <UserContext value={user}>
        <Child1 />
      </UserContext>
    </>
  )
}

export default App;