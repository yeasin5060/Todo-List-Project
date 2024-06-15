import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Login from "./userlogin&sginup/login/Login";
import Signup from "./userlogin&sginup/signup/Signup";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
