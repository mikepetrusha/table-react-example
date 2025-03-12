import { ITableColumn, IUser } from "./types/table";

export const mockUsers: IUser[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    role: "User",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    city: "Chicago",
  },

  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    city: "Houston",
  },
  {
    id: 5,
    name: "Jack White",
    email: "jack@example.com",
    role: "Admin",
    city: "Phoenix",
  },
  {
    id: 6,
    name: "Bill Green",
    email: "bill@example.com",
    role: "User",
    city: "Philadelphia",
  },
];

export const columns: ITableColumn<IUser>[] = [
  { name: "Id", accessor: "id" },
  { name: "Name", accessor: "name" },
  { name: "Email", accessor: "email" },
  {
    name: "Role",
    accessor: (row) => (
      <span style={{ background: `${row.role === "Admin" ? "red" : "green"}` }}>
        {row.role}
      </span>
    ),
  },
];
