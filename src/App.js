function Food({ name, picture }) {
  return (
    <div>
      <h2>
        I like {name}
      </h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg"
  },
  {
    name: "Chicken",
    image:
      "https://cdn.cms.prod.nypr.digital/images/8f417ad16chicken_main-jpg.2e16d0ba.fill-661x496.jpg"
  },
  {
    name: "Ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg"
  },
  {
    name: "Chips",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
