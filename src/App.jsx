import Button from "./components/Button";
import './App.css';
import { useCallback, useState } from "react";

const App = () => {

  const [email, setEmail] = useState('');

  // the function is created when the component re-renders
  const handleClick = useCallback(() => {
    console.log(`subscription successful for ${email}`);
  }, [email]);

  return (
    <>
      <form className="formSubscribe" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Type your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        &nbsp;
        <Button
          handleClick={handleClick}
        />
      </form>
    </>
  )
}

export default App;