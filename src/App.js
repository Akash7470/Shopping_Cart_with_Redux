import "./App.css";
import Navbar from "./components/Navbar";
import ShoppingHomepage from "./components/ShoppingHomepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container d-flex flex-wrap m-5">
        <ShoppingHomepage />
      </div>
    </div>
  );
}

export default App;
