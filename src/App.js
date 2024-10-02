import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    class: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl text-blue-700 font-bold text-center mb-5">
        Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">
            Registration Number
          </label>
          <input
            type="text"
            name="regNo"
            value={formData.regNo}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">
            Class
          </label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <label className="block text-sm font-medium text-gray-800 mb-2">
          Gender
        </label>
        <div className="flex items-center">
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="male" className="text-sm text-gray-800">
            Male
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="female" className="text-sm text-gray-800">
            Female
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-blue-600 font-semibold text-white p-2 rounded-md hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
