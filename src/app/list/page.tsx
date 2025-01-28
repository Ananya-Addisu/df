"use client";
import React, { useState, useEffect } from "react";

const ListPage: React.FC = () => {
  // Dummy data for the list
  const [data, setData] = useState([
    {
      task_id: "1",
      task_title: "Task 1",
      task_description: "Description for Task 1",
      due_date: new Date("2025-02-01").toISOString(),
      is_completed: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      task_id: "2",
      task_title: "Task 2",
      task_description: "Description for Task 2",
      due_date: new Date("2025-03-01").toISOString(),
      is_completed: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);

  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"update" | "delete" | null>(null);

  // Check if the user is registered
  useEffect(() => {
    const userRegistered = localStorage.getItem("user");

    if (!userRegistered) {
      window.location.href = "/register"; // Redirect to the register page
    }
  }, []);

  const openPopup = (task: any, type: "update" | "delete") => {
    setSelectedTask(task);
    setPopupType(type);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedTask(null);
    setPopupType(null);
    setShowPopup(false);
  };

  const handleUpdate = (updatedTask: any) => {
    setData((prevData) =>
      prevData.map((task) =>
        task.task_id === updatedTask.task_id ? updatedTask : task
      )
    );
    closePopup();
  };

  const handleDelete = (task_id: string) => {
    setData((prevData) => prevData.filter((task) => task.task_id !== task_id));
    closePopup();
  };

  const toggleCompletion = (task_id: string) => {
    setData((prevData) =>
      prevData.map((task) =>
        task.task_id === task_id
          ? { ...task, is_completed: !task.is_completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-white">Task List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((task) => (
          <div
            key={task.task_id}
            className="bg-white bg-opacity-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow border-2 border-yellow-300 hover:border-yellow-400 hover:cursor-pointer hover:scale-105 transform duration-300 ease-in-out"
          >
            <h2 className="text-lg font-bold">{task.task_title}</h2>
            <p className="text-gray-600 py-4">{task.task_description}</p>
            <p className="text-gray-600 text-sm py-4">
              Due Date: {new Date(task.due_date).toLocaleDateString()}
            </p>
            <p className="text-gray-600 py-4">Created At:&nbsp;&nbsp;{task.created_at}</p>
            <p className="text-gray-600 py-4">Updated At:&nbsp;&nbsp;&nbsp;{task.updated_at}</p>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                checked={task.is_completed}
                onChange={() => toggleCompletion(task.task_id)}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">
                {task.is_completed ? "Completed" : "Incomplete"}
              </span>
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => openPopup(task, "update")}
                className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => openPopup(task, "delete")}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            {popupType === "update" && selectedTask && (
              <div>
                <h2 className="text-xl font-bold mb-4">Update Task</h2>
                <label className="block mb-2 text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  defaultValue={selectedTask.task_title}
                  onChange={(e) =>
                    setSelectedTask((prev: any) => ({
                      ...prev,
                      task_title: e.target.value,
                    }))
                  }
                  className="w-full border rounded-md px-3 py-2 mb-4"
                />
                <label className="block mb-2 text-sm font-medium">
                  Description
                </label>
                <textarea
                  defaultValue={selectedTask.task_description}
                  onChange={(e) =>
                    setSelectedTask((prev: any) => ({
                      ...prev,
                      task_description: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full border rounded-md px-3 py-2 mb-4"
                ></textarea>
                <button
                  onClick={() => handleUpdate(selectedTask)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={closePopup}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            )}

            {popupType === "delete" && selectedTask && (
              <div>
                <h2 className="text-xl font-bold mb-4">Delete Task</h2>
                <p className="mb-4">
                  Are you sure you want to delete{" "}
                  <span className="font-bold">{selectedTask.task_title}</span>?
                </p>
                <button
                  onClick={() => handleDelete(selectedTask.task_id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={closePopup}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPage;
