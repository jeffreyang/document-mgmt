import { Payment, columns } from "../../../components/columns"
import { DataTable } from "../../../components/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "sdfdsafasf@asfsdf.com11",
    },
    // ...
  ]
}
 
export default async function HomePage() {
  const data = await getData()

  return (
    // <>HELLO THERE</>
    // <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    // </div>
  )
}
