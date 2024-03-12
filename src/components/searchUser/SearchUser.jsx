import axios from "axios";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const SearchUser = ({ setFilteredUsers }) => {
  const [formData, setFormData] = useState({
    Lname: "",
    Fname: "",
    nationalCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:4000/users", {
        params: formData,
      });
      setFilteredUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.4)]">
      <div className="p-8 bg-white dark:bg-slate-400 rounded-lg md:w-[32rem] w-full max-w-[32rem] relative">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <div
            className="absolute top-2 left-2 text-2xl cursor-pointer transition-all duration-150 hover:scale-150"
            onClick={() => setIsSearchOpen(false)}
          >
            <IoCloseSharp />
          </div>
      <div>
        <input
          type="text"
          placeholder="Search by Field 1"
          value={searchInput1}
          onChange={e => setSearchInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Field 2"
          value={searchInput2}
          onChange={e => setSearchInput2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Field 3"
          value={searchInput3}
          onChange={e => setSearchInput3(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default SearchUser;
