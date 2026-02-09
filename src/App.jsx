function Header({ name }) {

  // props -> properties
  // data from the parent component
  // props -> object (javascrpt)
  /*
    props = {
      name: 'sathish'
    }
  */

  return (
    <>
      <h1>Hello, {name.slice(0, 1).toUpperCase() + name.slice(1,)}!</h1>
    </>
  )
}

function App() {
  let name = 'sathish';

  return (
    <>
      <Header name={name} />
    </>
  )
}

export default App;