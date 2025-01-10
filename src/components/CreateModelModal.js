import React, { useState } from "react";

const CreateModelModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    modelName: "",
    modelType: "",
    modelDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Create New Model</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Model Name</label>
            <input
              type="text"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Model Type</label>
            <select
              name="modelType"
              value={formData.modelType}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="">Select</option>
              <option value="LLM">LLM</option>
              <option value="NN">NN</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Model Description</label>
            <textarea
              name="modelDescription"
              value={formData.modelDescription}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModelModal;
