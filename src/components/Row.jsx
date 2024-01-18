import React from "react";
import RowDeleteBTn from "./RowDeleteBTn";
import RowEditBtn from "./RowEditBtn";

const Row = ({ course: { id, title, short_name, fee } }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 select-none">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>

      <td className="px-6 py-4 cell-editable row-title">{title}</td>
      <td className="px-6 py-4 cell-editable row-short">{short_name}</td>
      <td className="px-6 py-4 cell-editable row-fee">{fee}</td>

      <td className="px-6 py-4 text-right flex gap-3">
        <RowEditBtn id={id} />

        <RowDeleteBTn id={id} />
      </td>
    </tr>
  );
};

export default Row;
