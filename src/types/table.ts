import { ReactNode } from "react";

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
  city: string;
}

export interface ITableColumn<T> {
  name: string;
  accessor: keyof T | ((row: T) => ReactNode);
}
