import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, [])
  console.log(data);
  return (
    <>
    <p className="normal-case ... text-5xl">List name in city Banyuwangi</p>
      <div className="mt-9 overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Username</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Address</TableHeadCell>
          <TableHeadCell>Phone</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            data.map((item) => (
              <TableRow key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.address.street} - {item.address.city}</TableCell>
                <TableCell>{item.phone}</TableCell>
              </TableRow>
            ))
          }
          
        </TableBody>
      </Table>
    </div>

    </>
  )
}

export default App
