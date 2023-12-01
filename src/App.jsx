import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="The best way to get what you want in life is to deserve what you want" />
    </div>
  );
};

export default App;
