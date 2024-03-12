import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../user/User";
import CreateUser from "../craeteUser/CreateUser";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput1, setSearchInput1] = useState("");
  const [searchInput2, setSearchInput2] = useState("");
  const [searchInput3, setSearchInput3] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/users");
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.log("we have an error =>", error);
      }
    };

    getUsers();
  }, []);

  const handleSearch = () => {
    let filteredData = users.filter((user) => {
      return (
        user.Fname.includes(searchInput1) &&
        user.Lname.includes(searchInput2) &&
        user.nationalCode.includes(searchInput3)
      );
    });
    setFilteredUsers(filteredData);
  };

  return (
    <div className="w-full overflow-x-auto max-w-full min-w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">
        <input
          type="text"
          placeholder="نام"
          value={searchInput1}
          onChange={(e) => setSearchInput1(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 mb-2 md:mb-0 w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="نام خانوادگی"
          value={searchInput2}
          onChange={(e) => setSearchInput2(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 mb-2 md:mb-0 w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="کد ملی"
          value={searchInput3}
          onChange={(e) => setSearchInput3(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 mb-2 md:mb-0 w-full md:w-auto"
        />
        <button
          className="py-3 px-8 bg-blue-600 dark:bg-blue-400 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-300 transition-colors duration-150 text-white w-full md:w-auto w"
          onClick={handleSearch}
        >
          جست و جو
        </button>
      </div>
      <button
        className="py-3 px-8 bg-blue-600 dark:bg-blue-400 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-300 transition-colors duration-150 text-white my-1 w-full md:w-auto w"
        onClick={() => setIsModalOpen(true)}
      >
        افزودن
      </button>
      {filteredUsers.length ? (
        <div className="overflow-x-auto">
          <table className="table-fixed border-collapse border border-slate-500 rounded-md whitespace-nowrap shadow-[0px 10px 10px #ccc] mx-auto  sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <tr className="bg-gray-300 dark:bg-gray-600">
                <th className="p-3">پروفایل</th>
                <th className="p-3">آي دي</th>
                <th className="p-3">نام</th>
                <th className="p-3">نام خانوادگي</th>
                <th className="p-3">کدملی</th>
                <th className="p-3">عملیات</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              {filteredUsers.map((user) => (
                <User key={user.id} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center"> کاربری یافت نشد!</h1>
      )}
      {isModalOpen && <CreateUser setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Table;
