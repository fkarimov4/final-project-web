import { createContext, useState } from "react";

export const QuizResultsContext = createContext();

export const QuizResultsContextProvider = (props) => {
  const [quizResults, setQuizResults] = useState([]);
  const value = { quizResults, setQuizResults };
  const { Provider } = QuizResultsContext;

  return <Provider value={value}>{props.children}</Provider>;
};
