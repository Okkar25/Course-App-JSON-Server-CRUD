import React from "react";

const LoaderRow = () => {
  return (
    <tr className="bg-white h-20 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 select-none">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-2.5 bg-gray-300 rounded-full animate-pulse dark:bg-gray-600 w-20" />
      </th>

      <td className="px-6 py-4 cell-editable row-title">
        <div className="flex items-center animate-pulse w-full max-w-[200px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-20" />
          <div className="h-2.5 ms-3 bg-gray-300 rounded-full dark:bg-gray-700 w-40" />
          <div className="h-2.5 ms-3 bg-gray-200 rounded-full dark:bg-gray-600 w-42" />
        </div>
      </td>

      <td className="px-6 py-4 cell-editable row-short">
        <div className="flex items-center animate-pulse w-full max-w-[100px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-20" />
          <div className="h-2.5 ms-3 bg-gray-300 rounded-full dark:bg-gray-700 w-32" />
        </div>
      </td>

      <td className="px-6 py-4 cell-editable row-fee">
        <div className="h-2.5 bg-gray-300 rounded-full animate-pulse dark:bg-gray-600 w-42" />
      </td>

      <td className="px-6 py-4 text-right flex gap-2">
        <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-600" />
        <div className="h-10 w-10 ms-3 bg-gray-300 rounded-full dark:bg-gray-600" />
      </td>
    </tr>
  );
};

export default LoaderRow;
