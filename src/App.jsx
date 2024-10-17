import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";

function App() {
  return (
    <div className="w-[1320px] mx-auto mt-12">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
