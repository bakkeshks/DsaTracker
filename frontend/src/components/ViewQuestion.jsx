import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DsaContext } from "../context/DsaContext";

const ViewQuestion = () => {
  const { questions } = useContext(DsaContext);
  const [fetchedQuestions, setFetchedQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/questions/viewquestion");
        setFetchedQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/questions/deletequestion/${id}`);
      // Update the questions state to reflect the deletion
      const updatedQuestions = fetchedQuestions.filter(question => question._id !== id);
      setFetchedQuestions(updatedQuestions);
      // If you also want to update the context state, you can do it here
      // setQuestions(updatedQuestions);
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };



  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Questions</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fetchedQuestions.map((question, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{question.question}</td>
              <td className="px-6 py-4 whitespace-nowrap">{question.topic}</td>
              <td className="px-6 py-4 whitespace-nowrap">{question.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => handleDelete(question._id)} className="text-red-600 hover:text-red-800">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewQuestion;
