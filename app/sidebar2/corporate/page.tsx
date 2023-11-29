import { User, columns } from "@/components/user-columns"
import { DataTable } from "@/components/data-table"
 
async function getData(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

export default async function ProductsPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
