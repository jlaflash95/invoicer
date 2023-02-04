'use client'

import {useList} from "@/stores/store";

export default function ClientInvoices({clientId}) {

    const {selectedClientId, selectedClient} = useList()

    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }

    const handleClick = (id) => {

    }

    if (selectedClientId === clientId) {
        if (selectedClient.expand?.invoices) return (
            selectedClient.expand.invoices.map((invoice, index) =>(
                <a key={invoice.id}
                    className={"bg-white shadow-xl flex py-2 pl-4 text-base font-semibold cursor-pointer border-b border-gray-200 cursor-pointer"}
                    href={`/invoice/${invoice.id}`}
                >
                    <p className={"basis-[1%]"}>
                        #{index+1}
                    </p>
                    <span className={"flex flex-1 pl-40"}>
                        <div className={"basis-1/4 flex space-x-2"}>
                            <p className={"font-medium"}>Sent:</p>
                            <p className={"font-normal"}>{new Date(invoice.dateSent).toLocaleDateString('en-US', options)}</p>
                        </div>
                        <div className={"basis-1/4 flex space-x-2"}>
                            <p className={"font-medium"}>Due:</p>
                            <p className={"font-bold"}>{new Date(invoice.dueDate).toLocaleDateString('en-US', options)}</p>
                        </div>
                        <div className={"basis-1/4 flex space-x-2"}>
                            <p className={"font-medium"}>Estimated Hours:</p>
                            <p className={"font-normal"}>{invoice.hours} hrs</p>
                        </div>
                        <div className={"basis-1/4 flex space-x-2"}>
                            <p className={"font-medium"}>Rate:</p>
                            <p className={"font-normal"}>${invoice.rate}</p>
                        </div>
                    </span>
                </a>
            ))
        )
        else return (
            <div className={"bg-gray-50 flex flex-1 py-2 pl-8 text-sm font-bold"}>
                Oops! Looks like there aren't any invoices for this client yet!
            </div>
        )
    } else {
        return null
    }
}
