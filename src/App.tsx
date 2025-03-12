import "./App.css";
import { Table } from "./components/table/Table";
import { columns, mockUsers } from "./mockData";

function App() {
  return (
    <>
      <h2>Table</h2>
      <Table data={mockUsers} columns={columns} />
    </>
  );
}

export default App;
