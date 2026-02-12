import axios from "axios";
import { useEffect, useState } from "react";

/*
  useEffect
    - It's a react hook.
    - It allows us to perform side effects in our components.
    - examples: fetching data, setting up a subscription, and manually changing the DOM in React components.

  useEffect is used for the following scenarios:

    1. Run a function or side effect after the component renders for the first time.
    2. Run a function or side effect after every render of the component.
    3. Run a function or side effect only when specific state variables change.
*/

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    console.log('runs after first render and for every state changes');
  }, [likes]);

  return (
    <>
      <div>
        <button onClick={() => setLikes(likes + 1)}>Like</button> &nbsp; {likes} &nbsp; likes
      </div>
      <br />
      <div>
        <button onClick={() => setDislikes(dislikes + 1)}>Dislike</button> &nbsp; {dislikes}  &nbsp; dislikes
      </div>
    </>
  )
}

export default App;