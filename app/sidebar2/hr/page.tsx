import { Payment, columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "828ed52f",
      amount: 100000000,
      status: "failed",
      email: "JEFF@ABC123.com",
    },
    {
      id: "828ed52a",
      amount: 300000000,
      status: "success",
      email: "testJEFF@ABC123.com",
    },
    {
      id: "828ed52b",
      amount: 500000000,
      status: "processing",
      email: "JeffJEFF@ABC123.com",
    },    
    // ...
  ]
}

export default async function MailsPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
