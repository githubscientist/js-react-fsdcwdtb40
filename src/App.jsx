import Header from "./components/Header";

function App() {
  let name = 'sathish';
  let age = 35;

  return (
    <>
      <Header name={name} age={age} />
    </>
  )
}

export default App;