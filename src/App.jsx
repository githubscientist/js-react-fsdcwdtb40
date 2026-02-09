import Header from "./components/Header";

function App() {
  let message = 'hi, how are you?';

  return (
    <>
      <Header message={message} />
    </>
  )
}

export default App;