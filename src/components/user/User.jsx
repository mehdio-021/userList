import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEdit, FaMapMarkerAlt, FaChartBar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ShowUser from "../showuser/ShowUser";
import EditUser from "../editUser/EditUser";
import UserLocation from "../userLocation/UserLocation";
import UserChart from "./../userChart/UserChart";
import toast, { Toaster } from "react-hot-toast";

const User = ({ id, avatar, Fname, Lname, nationalCode }) => {
  const [showUser, setShowUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [userLocation, setUserLocation] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const toggleModal = () => {
    setShowUser(!showUser);
  };

  const showEditUserModal = () => {
    setEditUser(!editUser);
  };

  const showUserLocation = () => {
    setUserLocation(!userLocation);
  };

  const showUserChart = () => {
    setShowChart(!showChart);
  };

  return (
    <tr key={id} className="hover:bg-gray-300 dark:hover:bg-gray-600 ">
      <td className="overflow-hidden text-ellipsis p-3 ">
        <img
          src={avatar}
          alt=""
          className="rounded-full  w-10 object-contain "
        />
      </td>
      <td className="overflow-hidden text-ellipsis p-3 border-x-2">{id}</td>
      <td className="overflow-hidden text-ellipsis p-3 border-x-2">{Fname}</td>
      <td className="overflow-hidden text-ellipsis p-3 border-x-2">{Lname}</td>
      <td className="overflow-hidden text-ellipsis p-3 border-x-2">
        {nationalCode}
      </td>
      <td className=" p-3 grid grid-cols-2 md:grid-cols-5 gap-2  justify-center w-full  mt-2">
        <span
          onClick={toggleModal}
          className="flex justify-center items-center"
        >
          <FaEye className="text-blue-900 text-xl cursor-pointer transition-all duration-150 hover:scale-150" />
        </span>
        <span
          onClick={showEditUserModal}
          className="flex justify-center items-center"
        >
          <FaEdit className="text-green-900 text-xl cursor-pointer transition-all duration-150 hover:scale-150" />
        </span>
        <span
          onClick={showUserLocation}
          className="flex justify-center items-center"
        >
          <FaMapMarkerAlt className="text-teal-900 text-xl cursor-pointer transition-all duration-150 hover:scale-150" />
        </span>
        <span
          onClick={showUserChart}
          className="flex justify-center items-center"
        >
          <FaChartBar className="text-purple-800 text-xl cursor-pointer transition-all duration-150 hover:scale-150" />
        </span>
      </td>
      <Toaster />
      {showUser && (
        <ShowUser
          user={{ id, avatar, Fname, Lname, nationalCode }}
          onClose={toggleModal}
        />
      )}
      {editUser && (
        <EditUser
          user={{ id, avatar, Fname, Lname, nationalCode }}
          onClose={showEditUserModal}
        />
      )}
      {userLocation && <UserLocation onClose={showUserLocation} />}
      {showChart && <UserChart onClose={showUserChart} />}
    </tr>
  );
};

export default User;
