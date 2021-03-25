import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      {/* <a href="/">Home</a>
      <a href="/about">About</a> html refreshes page so cant do about, use Link instead*/}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
