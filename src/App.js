import "./App.css";
import { images } from "./assets";

function App() {
  return (
    <div className="img_container">
      <nav className="nav_bar">
        <div className="brand">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="right_side">
          <li>
            <a href="https://twitter.com/" without rel="noreferrer" target="_blank">
              <img src={images.twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://discord.com/" without rel="noreferrer" target="_blank">
              <img src={images.discord} alt="discord" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
