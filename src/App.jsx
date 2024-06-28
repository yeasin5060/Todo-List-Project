import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Login from "./userlogin&sginup/login/Login";
import Signup from "./userlogin&sginup/signup/Signup";
import Homepage from "./pages/homepage/Homepage";
import Main from "./layout/main/Main";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element = { <Main/>}>
           <Route path="homepage" element = {<Homepage/>}/>
          </Route>
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
