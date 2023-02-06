'use client'
import ClientHeader from '@/components/listView/clientHeader'
import ClientDocuments from '@/components/listView/clientDocuments'
import {useClientContext} from "@/context/ClientContext";



export default function Main() {

    const {clients} = useClientContext()

    if (clients) {
        return (
            <div className={"pt-10 min-h-screen bg-gray-100"}>

                <h1 className={"text-6xl font-bold text-center"}>Clients</h1>

                <div className={"p-8 space-y-6 max-w-7xl mx-auto"}>
                    {clients?.map((client) => (
                        <div className={""} key={client.id}>
                            <ClientHeader client={client}/>
                            <ClientDocuments client={client}/>
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
