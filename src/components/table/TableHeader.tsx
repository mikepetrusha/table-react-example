import { ITableColumn } from "../../types/table";
import { TableRow } from "./TableRow";

export const TableHeader = <T,>({
  columns,
}: {
  columns: ITableColumn<T>[];
}) => {
  return (
    <thead>
      <TableRow>
        {columns.map((column) => (
          <th key={column.name}>{column.name}</th>
        ))}
      </TableRow>
    </thead>
  );
};
