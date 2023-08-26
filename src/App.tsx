import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import DataProvider from "./context/authContext";
import "./App.css";
import User from "./pages/UserPage";
import UserC from "./pages/UserCPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <>
      {/* <DataProvider> */}
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<User />} />
            <Route path="/user-c-dashboard" element={<UserC />} />
          </Routes>
        </Router>
      {/* </DataProvider>43n */}
    </>
  );
}

export default App;
