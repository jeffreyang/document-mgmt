//"use client"

import { ColumnDef } from "@tanstack/react-table"

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "completed",
    header: "Completed",
  },
]