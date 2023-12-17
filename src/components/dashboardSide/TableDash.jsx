export default function TableDash({ header, rows }) {
  return (
    <div className="w-full h-[69dvh] overflow-auto">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((item) => (
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
                  <td key={item[el]} className="px-6 py-4 dark:text-white">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}