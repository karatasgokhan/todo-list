import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.css";

import Home from "./pages/Home/Home";

import DefaultLayout from "./layout/DefaultLayout";

import * as ROUTES from "./constants/routePath";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
