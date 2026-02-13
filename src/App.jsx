const App = () => {

  const handleSend = () => {
    console.log('sending message...');
    console.log(document.getElementById('message').value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="message..."
        id="message"
        name="message"
      />
      <button onClick={handleSend}>Send</button>
    </>
  )
}

export default App;