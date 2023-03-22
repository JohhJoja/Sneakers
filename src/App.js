import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import RequireAuth from "./hok/RequireAuth";
import { RouterProvider } from "./hok/RouterProvider";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import LayOut from "./pages/LayOut";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Purshase from "./pages/Purshase";
import Shop from "./pages/Shop";
import SinglePage from "./pages/SinglePage";
import User from "./pages/User";
import './style/index.css'

function App() {
  return (
    <RouterProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="user" element={
              <RequireAuth>
                <User />
              </RequireAuth>
            } />
            <Route path="shop/:id" element={<SinglePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="user/edit" element={<Edit />} />
            <Route path="/shop/:id/buy" element={
              <RequireAuth>
                <Purshase />
              </RequireAuth>
            } />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </RouterProvider>
  );
}

export default App;
