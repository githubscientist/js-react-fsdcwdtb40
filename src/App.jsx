function Header({ name, age }) {
  return (
    <>
      <h1>Hello, {name.slice(0, 1).toUpperCase() + name.slice(1,)}!, You're {age} years old</h1>
    </>
  )
}

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