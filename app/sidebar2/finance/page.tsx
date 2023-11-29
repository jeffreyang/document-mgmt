import { Todo, columns } from "@/components/todo-columns";
import { DataTable } from "@/components/data-table"


async function getData(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
 
 
export default async function HomePage() {
  const data = await getData()

  return (
    // <>HELLO THERE</>
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
