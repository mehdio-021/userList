import axios from "axios";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const EditUser = ({ user, onClose }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      await axios.put(`http://localhost:4000/users/${editedUser.id}`, editedUser);
      console.log(`User with id ${editedUser.id} has been updated successfully.`);
      onClose();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className=" fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.4)] ">
      <div className="p-8 bg-white dark:bg-slate-800 rounded-lg w-[32rem] relative">
        <form onSubmit={handleSubmit}>
        <div
            className="absolute top-2 left-2 text-2xl cursor-pointer transition-all duration-150 hover:scale-150"
            onClick={onClose}
          >
            <IoCloseSharp />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1" htmlFor="Fname">
              نام:
            </label>
            <input
              className="border rounded-md p-1 text-lg outline-0 dark:text-black"
              type="text"
              id="Fname"
              name="Fname"
              value={editedUser.Fname}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1" htmlFor="Lname">
              نام خانوادگی:
            </label>
            <input
              className="border rounded-md p-1 text-lg outline-0 dark:text-black"
              type="text"
              id="Lname"
              name="Lname"
              value={editedUser.Lname}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1" htmlFor="nationalCode">
              کدملی:
            </label>
            <input
              className="border rounded-md p-1 text-lg outline-0 dark:text-black"
              type="text"
              id="nationalCode"
              name="nationalCode"
              value={editedUser.nationalCode}
              onChange={handleChange}
            />
          </div>
          <div className=" flex justify-between items-center mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-800 text-white py-2 px-6  m-auto rounded-xl shadow-3xl hover:bg-blue-700 dark:hover:bg-blue-900 transition-all duration-300"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
