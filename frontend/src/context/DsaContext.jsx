import React, { createContext, useState } from 'react';

export const DsaContext = createContext();

export const DsaProvider = ({ children }) => {
  const title ="DSA Tracker";
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <DsaContext.Provider value={{ title, questions, addQuestion, setQuestions }}>
      {children}
    </DsaContext.Provider>
  );
};
