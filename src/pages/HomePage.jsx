import React from "react";
import { useState } from "react";

import { CreateUser, Table, ThemeButton } from "../components";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <ThemeButton />
      <div className="overflow-x-auto mx-auto mb-6">
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
