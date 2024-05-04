import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Builds } from "./pages/Builds";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="builds" element={<Builds />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
