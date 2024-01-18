import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const EmptyRow = () => {
  const { toggleCreateDrawer } = useContext(DataContext);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 select-none">
      <th
        colSpan={5}
        scope="row"
        className="row-id px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
      >
        There are no available courses.
        <button className="underline ms-3" onClick={toggleCreateDrawer}>Create a new one.</button>
      </th>
    </tr>
  );
};

export default EmptyRow;
