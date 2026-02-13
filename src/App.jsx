import { useRef, useState } from "react";

const App = () => {

  /*
    value of useRef object is persisting across the component re-renders.
    value change in useRef object does not cause re-rendering.
  */

  let [likes, setLikes] = useState(0);
  let [test, setTest] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  console.log(likes);
  console.log('component rendered')

  return (
    <>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button> &nbsp;
      <button onClick={() => setTest(test + 1)}>Change State</button>
    </>
  )
}

export default App;