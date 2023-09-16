import { Route, Routes } from "react-router-dom";
import { Catalog } from "./Pages/Catalog";
import { Home } from "./Pages/Home";
import { AppBar } from "./Component/AppBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/favorites" element={<Favorite />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
