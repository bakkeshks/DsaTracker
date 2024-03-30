import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DsaContext } from '../context/DsaContext';

const Home = () => {
  const [stats, setStats] = useState({
    totalQuestions: 0,
    notStarted: 0,
    completed: 0,
    revised: 0
  });
  const { questions, setQuestions } = useContext(DsaContext); // Assuming you have a setQuestions function in your context

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/viewquestion',{
        headers: {
          Authorization: `${authToken}` // Include the token in the request headers
        }
      });
        setQuestions(response.data); // Assuming your backend returns an array of questions
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [setQuestions]);

  useEffect(() => {
    // Calculate statistics based on fetched questions
    const totalQuestions = questions.length;
    const notStarted = questions.filter(question => question.status === 'not started').length;
    const completed = questions.filter(question => question.status === 'completed').length;
    const revised = questions.filter(question => question.status === 'revised').length;

    // Update state with calculated statistics
    setStats({ totalQuestions, notStarted, completed, revised });
  }, [questions]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Total Questions</h3>
          <p>{stats.totalQuestions}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Not Started</h3>
          <p>{stats.notStarted}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Completed</h3>
          <p>{stats.completed}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Revised</h3>
          <p>{stats.revised}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
