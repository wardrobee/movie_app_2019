function Food(props) {
  console.log(props);
  return <h3>I love potato</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" something={true} papap={[1, 2, 3, true]} />
      {/* fav라는 property w value kimchi */}
    </div>
  );
}

export default App;
