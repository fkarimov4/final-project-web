import { createContext, useState, useEffect } from "react";

export const QuizResultsContext = createContext();

export const QuizResultsContextProvider = (props) => {
  const [quizResults, setQuizResults] = useState();
  const value = { quizResults, setQuizResults };
  const { Provider } = QuizResultsContext;
//   useEffect(() => {

//   }, []);

  return <Provider value={value}>{props.children}</Provider>;
};
