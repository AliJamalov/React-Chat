// Pages
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="Home" element={<Home/>}></Route>
      <Route path="signInPage" element={<SignIn/>}></Route>
      <Route path="/" element={<SignUp/>}></Route>
    </Routes>
  );
};

export default App;
