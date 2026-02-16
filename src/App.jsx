import Button from "./components/Button";
import './App.css';

const App = () => {

  // the function is created when the component re-renders
  const handleClick = () => {
    console.log('button clicked');
  }

  return (
    <>
      <form className="formSubscribe">
        <input
          type="text"
          placeholder="Type your email..."
        />
      </form>
      &nbsp;
      <Button
        handleClick={handleClick}
      />
    </>
  )
}

export default App;