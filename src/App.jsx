const App = () => {
  let recipes = [
    'Biryani',
    'Pulao',
    'Fried Rice',
    'Noodles',
    'Pasta',
  ]

  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {
          recipes
            .map((recipe, index) => (
              <li key={index}>{recipe}</li>
            ))
        }
      </ul>
    </>
  )
}

export default App;