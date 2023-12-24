import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="The best way to get what you want in life is to deserve what you want" />
            }
          />
          <Route
            path="/categoria/id:Categoria"
            element={
              <ItemListContainer greeting="The best way to get what you want in life is to deserve what you want" />
            }
          />
          <Route path="/item:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      <NavBar />
    </div>
  );
};

export default App;
