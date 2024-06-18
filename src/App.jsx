import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Login from "./userlogin&sginup/login/Login";
import Signup from "./userlogin&sginup/signup/Signup";
import Homepage from "./pages/homepage/Homepage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/homepage" element = {<Homepage/>}/>
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
