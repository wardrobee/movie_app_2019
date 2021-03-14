function Food({ name, picture }) {
  return (
    <div>
      <h2>
        I like {name}
      </h2>
      <img src={picture} alt="food" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg"
  },
  {
    id: 2,
    name: "Chicken",
    image:
      "https://cdn.cms.prod.nypr.digital/images/8f417ad16chicken_main-jpg.2e16d0ba.fill-661x496.jpg"
  },
  {
    id: 3,
    name: "Ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg"
  },
  {
    id: 4,
    name: "Chips",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map((dish, id) =>
        <Food name={dish.name} picture={dish.image} key={id} />
      )}
    </div>
  );
}

export default App;
