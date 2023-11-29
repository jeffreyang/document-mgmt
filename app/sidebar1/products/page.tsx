import { Payment, columns } from "../../../components/columns"
import { DataTable } from "../../../components/data-table"
 
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "928ed52f",
      amount: 32454325,
      status: "pending",
      email: "asbfd@dsfasdfsadfdsafdsaf.com",
    },
    // ...
  ]
}

export default async function ProductsPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
