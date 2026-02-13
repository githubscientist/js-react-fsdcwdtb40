import { useRef } from "react";

const App = () => {

  // create a reference
  const messageRef = useRef(null);

  const handleSend = () => {
    console.log('sending message...');
    console.log(messageRef.current.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="message..."
        ref={messageRef}
      />
      <button onClick={handleSend}>Send</button>
    </>
  )
}

export default App;