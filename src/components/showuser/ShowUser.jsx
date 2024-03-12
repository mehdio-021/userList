import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ShowUser = ({ user, onClose }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/users/${user.id}`);
      console.log(`User with id ${user.id} has been deleted successfully.`);
      onClose(); // بستن مدال پس از حذف کاربر
      toast.success("کاربر با موفقیت حذف شد");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("حذف کاربر با خطا مواجه شد");
    }
  };

  return (
    <div className=" fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.4)] ">
      <div className="p-8 bg-white dark:bg-slate-400 rounded-lg w-[32rem] relative">
        <div
          className="absolute top-2 left-2 text-2xl cursor-pointer transition-all duration-150 hover:scale-150"
          onClick={onClose}
        >
          <IoCloseSharp />
        </div>
        <div className="flex flex-col mb-4 items-center justify-center">
          <h2 className="text-lg font-semibold mb-4">جزئیات کاربر</h2>
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-40 rounded-full mb-4"
          />
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 font-medium">آی دی:</td>
                <td className="py-2 px-4">{user.id}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 font-medium">نام:</td>
                <td className="py-2 px-4">{user.Fname}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 font-medium">نام خانوادگی:</td>
                <td className="py-2 px-4">{user.Lname}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 font-medium">کدملی:</td>
                <td className="py-2 px-4">{user.nationalCode}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1 rounded-lg mt-4"
          >
            حذف کاربر
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
