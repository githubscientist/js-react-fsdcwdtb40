import { useState } from "react";

const App = () => {

  let [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  console.log(likes);

  return (
    <>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button>
    </>
  )
}

export default App;