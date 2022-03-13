import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { UserContextProvider } from "./context/UserContext";
import { QuizResultsContextProvider } from "./context/QuizResultsContext";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";
import Home from "./scenes/Home";
import Header from "./components/Header";
import MyAccount from "./scenes/MyAccount";
import Quiz from "./scenes/Quiz";
import Footer from "./components/Footer";
import JobDetails from "./scenes/JobDetails";
import QuizResults from "./scenes/QuizResults";

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
      <QuizResultsContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/your-results/" element={<QuizResults />} />
        </Routes>
        <Footer />
      </QuizResultsContextProvider>
    </UserContextProvider>
  );
}

export default App;
