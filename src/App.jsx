import ParentComponent from "./components/ParentComponent";

const App = () => {

  const name = 'Krish';

  return (
    <>
      <ParentComponent
        name={name}
      />
    </>
  )
}

export default App;