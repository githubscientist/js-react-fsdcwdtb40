import Header from "./components/Header";

function App() {
  const getDataFromChild = (message) => {
    console.log('Child:', message);
  }

  return (
    <>
      <Header getDataFromChild={getDataFromChild} />
    </>
  )
}

export default App;