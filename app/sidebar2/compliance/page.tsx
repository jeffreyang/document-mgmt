import { Cat, CatData, columns } from "@/components/cat-columns"
import { DataTable } from "@/components/data-table"

async function getData(): Promise<CatData> {
  const res = await fetch("https://catfact.ninja/breeds")
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
 
export default async function HomePage() {
  const catData = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={catData.data} />
    </div>
  )
}
