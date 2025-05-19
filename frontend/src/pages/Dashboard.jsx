import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleUpload = () => navigate("/upload");
  const handleAnalytics = () => navigate("/analytics");
  const handlePrediction = () => navigate("/predict");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold text-teal-600">Expense Tracker</h1>
        <nav className="flex space-x-6 items-center">
          <a href="/services" className="text-gray-700 hover:text-teal-600">
            Services
          </a>
          <a href="/dashboard" className="text-teal-600 font-semibold">
            Dashboard
          </a>
          <button
            onClick={() => navigate("/logout")}
            className="flex items-center text-red-500 hover:text-red-600"
          >
            <span className="mr-1">🔓</span> Logout
          </button>
        </nav>
      </header>

      {/* Dashboard Title */}
      <div className="text-center my-10">
        <h2 className="text-4xl font-bold text-blue-600">Dashboard</h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-8 px-6 flex-wrap">
        {/* Upload Bills */}
        <div className="bg-white border rounded-xl p-6 shadow-md w-80 text-center">
          <div className="text-4xl mb-4 text-teal-500">⬆️</div>
          <h3 className="text-lg font-semibold mb-2">
            Upload Bills and Manage Expenses
          </h3>
          <p className="text-gray-600 mb-6">
            Upload bills from your Google Drive. Add expenses manually,
            categorize them, and keep track of all your spending in one place.
          </p>
          <button
            onClick={handleUpload}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
          >
            Start Now →
          </button>
        </div>

        {/* Analytics */}
        <div className="bg-white border rounded-xl p-6 shadow-md w-80 text-center">
          <div className="text-4xl mb-4 text-teal-500">📊</div>
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600 mb-6">
            Get insights into your spending habits with detailed charts and
            future expense predictions.
          </p>
          <button
            onClick={handleAnalytics}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
          >
            View Analytics →
          </button>
        </div>

        {/* Future Predictions */}
        <div className="bg-white border rounded-xl p-6 shadow-md w-80 text-center">
          <div className="text-4xl mb-4 text-teal-500">🧠</div>
          <h3 className="text-lg font-semibold mb-2">
            Future Expense Prediction
          </h3>
          <p className="text-gray-600 mb-6">
            Get AI-driven predictions for your expenses over the next three
            months based on past spending trends.
          </p>
          <button
            onClick={handlePrediction}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
          >
            Predict Expenses →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
