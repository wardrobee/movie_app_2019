import PropTypes from "prop-types";

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
      "https://cdn.cms.prod.nypr.digital/images/8f417ad16chicken_main-jpg.2e16d0ba.fill-661x496.jpg",
    rating: 20
  },
  {
    id: 3,
    name: "Ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",
    rating: 10
  },
  {
    id: 4,
    name: "Chips",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg",
    rating: 4
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>
        I like {name}
      </h2>
      <h2>
        {rating}/5.0
      </h2>
      <img src={picture} alt={name} />
    </div>
  );
}

// has to be named propTypes
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number // can be undefined or number
};

function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      )}
    </div>
  );
}

export default App;
