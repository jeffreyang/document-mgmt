//"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Cat {
  breed: string;
  country: number;
  origin: string;
  coat: string;
  pattern: string;
}
export interface CatData {
  current_page: number;
  data: Cat[];
}

export const columns: ColumnDef<Cat>[] = [
  {
    accessorKey: "breed",
    header: "Breed",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "origin",
    header: "Origin",
  },
]