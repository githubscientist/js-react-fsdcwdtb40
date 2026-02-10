const App = () => {

  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Count + 1</button>
    </>
  )
}

export default App;