import axios from "axios";
import { useEffect, useState } from "react";

/*
  useEffect
    - It's a react hook.
    - It allows us to perform side effects in our components.
    - examples: fetching data, setting up a subscription, and manually changing the DOM in React components.
*/

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  /*
    1. run a function after a component is rendered.
    2. run a function after a component is rendered and whenever a particular state changes.
    3. run a function after a component is rendered and whenever any state changes.
  */

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