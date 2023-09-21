import React, { useEffect, useState } from "react";
const getApi = "http://localhost:4370/getUsers";

function Users() {
  const jwtToken = localStorage.getItem("jwtToken");
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform an asynchronous operation, like fetching data from an API.
        const response = await fetch(getApi, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response data.
        const result = await response.json();

        // Update the state with the fetched data.
        setTableData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function.
    fetchData();
  }, [jwtToken, tableData]);
  if (tableData.length === 0) {
    return (
      <div className="w-full h-full flex text-center align-middle m-auto font-semibold">
        Loading...
      </div>
    );
  }
  return (
    <div className="overflow-x-auto text-base md:text-medium w-full h-full flex align-center justify-center py-8">
      <table className="lg:table-auto divide-y divide-gray-200 border-collapse border border-slate-400">
        <thead>
          <tr className="capitalize py-3">
            <th className="border border-slate-300">username</th>
            <th className="border border-slate-300">email</th>
            <th className="border border-slate-300">password</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item._id}>
              <td className="border border-slate-300">
                <input
                  value={item.username}
                  className="outline-none py-2 px-2 whitespace-nowrap"
                  readOnly
                />
              </td>
              <td className="border border-slate-300">
                <input
                  value={item.email}
                  className="outline-none py-2 px-2 whitespace-nowrap"
                  readOnly
                />
              </td>
              <td className="border border-slate-300">
                <input
                  value={item.password}
                  className="outline-none py-2 px-2 whitespace-nowrap"
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
