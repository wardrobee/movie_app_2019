function Food({ fav }) {
  return (
    <h3>
      I like {fav}
    </h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="pancake" />
      <Food fav="juice" />

      {/* fav라는 property w value kimchi */}
    </div>
  );
}

export default App;
