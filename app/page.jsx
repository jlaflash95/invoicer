import ClientHeader from '@/components/view/ClientHeader'
import ClientInvoices from '@/components/view/ClientInvoices'
import {useList} from "@/stores/store";

// Fetch Data
const getData = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/clients/records?sort=+company&expand=invoices')
    let clients = await res.json()
    useList.setState({clients: clients?.items})
}

export default async function Main() {
    await getData()
    const clients = useList.getState().clients

    if (clients) {
        return (
            <div className={"pt-10 min-h-screen bg-gray-100"}>

                <h1 className={"text-6xl font-bold text-center"}>Clients</h1>

                <div className={"p-8 space-y-6 max-w-7xl mx-auto"}>
                    {clients?.map((client) => (
                        <div className={""} key={client.id}>
                            <ClientHeader client={client}/>
                            <ClientInvoices clientId={client.id}/>
                        </div>
                    ))}
                </div>

            </div>
        )
    } else {
        return (
            <div>
                <p>There are currently no clients or invoices to show.</p>
            </div>
        )
    }
}
