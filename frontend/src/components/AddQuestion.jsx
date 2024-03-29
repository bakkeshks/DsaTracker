import React, { useState, useContext } from "react";
import axios from "axios";
import { DsaContext } from "../context/DsaContext";

const AddQuestion = () => {
  const { addQuestion } = useContext(DsaContext);
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question || !topic || !status) return;

    try {
      const response = await axios.post("http://localhost:5000/questions/addquestion", {
        question,
        topic,
        status,
      });
      addQuestion(response.data);
      setQuestion("");
      setTopic("");
      setStatus("");
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700"
            >
              Question
            </label>
            <textarea
              id="question"
              className="mt-1 p-2 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700"
            >
              Topic
            </label>
            <select
              id="topic"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="">Select Topic</option>
              <option value="array">Array</option>
              <option value="stack">Stack</option>
              <option value="linkedlist">Linked List</option>
              <option value="queue">Queue</option>
              <option value="DP">Dynamic Programming</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="not started">Not Started</option>
              <option value="completed">Completed</option>
              <option value="revised">Revised</option>
            </select>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;
