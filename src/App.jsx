import Child1 from "./components/Child1";

const App = () => {

  // data is in the parent component: App
  const user = {
    email: "sathish@guvi.in"
  }

  return (
    <>
      <Child1
        user={user}
      />
    </>
  )
}

export default App;