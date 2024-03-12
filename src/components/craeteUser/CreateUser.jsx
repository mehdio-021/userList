import axios from "axios";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const CreateUser = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    avatar: "",
    Fname: "",
    Lname: "",
    nationalCode: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      await axios.post("http://localhost:4000/users", formData);
      toast.success("کاربر ایجاد شد");
      setIsModalOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("ساخت کاربر با خطا مواجه شد");
    }
  };

  return (
   <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.4)]">
  <div className="p-8 bg-white dark:bg-slate-400 rounded-lg md:w-[32rem] w-full max-w-[32rem] relative">
    <form action="" onSubmit={handleSubmit} onChange={handleChange}>
      <div className="absolute top-2 left-2 text-2xl cursor-pointer transition-all duration-150 hover:scale-150" onClick={() => setIsModalOpen(false)}>
        <IoCloseSharp />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1" htmlFor="avatar">پروفایل:</label>
        <input className="border rounded-md p-1 text-lg outline-0" type="file" id="avatar" name="avatar" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-3">
        <div className="flex flex-col mb-4 w-full md:w-1/2">
          <label className="mb-1" htmlFor="Fname">نام:</label>
          <input className="border rounded-md p-1 text-lg outline-0" type="text" id="Fname" name="Fname" />
        </div>
        <div className="flex flex-col mb-4 w-full md:w-1/2">
          <label className="mb-1" htmlFor="Lname">نام خانوادگی:</label>
          <input className="border rounded-md p-1 text-lg outline-0" type="text" id="Lname" name="Lname" />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1" htmlFor="nationalCode">کدملی:</label>
        <input className="border rounded-md p-1 text-lg outline-0" type="text" id="nationalCode" name="nationalCode" />
      </div>
      <div className="flex justify-center md:justify-end items-center mt-6">
        <button type="submit" className="w-full md:w-auto bg-blue-600 dark:bg-blue-800 text-white py-2 px-6 m-auto rounded-xl shadow-3xl hover:bg-blue-700 dark:hover:bg-blue-900 transition-all duration-300">ایجاد</button>
      </div>
    </form>
  </div>
</div>

  );
};

export default CreateUser;
