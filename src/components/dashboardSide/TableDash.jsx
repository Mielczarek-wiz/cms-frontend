import { memo } from "react";
import ManageButtons from "./ManageButtons";

const Table = ({ header, rows, form }) => {
  const tableHeader = [...header, "Actions"];
  return (
    <>
      <div className="w-full h-[62dvh]">
        <div className="w-full h-full overflow-auto">
          {rows.length !== 0 ? (
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {tableHeader.map((item) => (
                    <th key={item} scope="col" className="px-6 py-3">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500"
                  >
                    {Object.keys(item).map((el) =>
                      el !== "id" ? (
                        <td
                          key={item[el]}
                          className="px-6 py-4 dark:text-white"
                        >
                          {item[el].toString()}
                        </td>
                      ) : (
                        <th
                          key={item[el]}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item[el].toString()}
                        </th>
                      )
                    )}
                    <td>
                      <ManageButtons form={form} item={item} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span className="flex flex-row items-center justify-center w-full h-full text-xl font-extrabold text-center text-white border">
              No data to display
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export const TableDash = memo(Table);
