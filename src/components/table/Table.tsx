import { Key, ReactNode } from "react";
import { ITableColumn } from "../../types/table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TableBody } from "./TableBody";

export const Table = <T extends { id: Key }>({
  data,
  columns,
}: {
  data: T[];
  columns: ITableColumn<T>[];
}) => {
  const renderCell = (row: T, column: ITableColumn<T>) => {
    if (typeof column.accessor === "function") {
      return column.accessor(row);
    }
    return row[column.accessor];
  };

  return (
    <table>
      <TableHeader columns={columns} />

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <td key={column.name}>{renderCell(row, column) as ReactNode}</td>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </table>
  );
};
