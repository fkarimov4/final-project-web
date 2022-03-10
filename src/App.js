import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { UserContextProvider } from "./context/UserContext";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";
import Home from "./scenes/Home";
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyBBGPsfUWjd-Lm_2YYB021F9GFe645mRM0",
  authDomain: "jobify-fk.firebaseapp.com",
  projectId: "jobify-fk",
  storageBucket: "jobify-fk.appspot.com",
  messagingSenderId: "56042238888",
  appId: "1:56042238888:web:c879ad1a2a8f436e68e39d",
};

initializeApp(firebaseConfig);

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
