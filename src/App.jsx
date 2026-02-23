const App = () => {

  const handleIncrement = () => {
    console.log('button clicked');
  }

  return (
    <>
      <h1>Count: { }</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App;