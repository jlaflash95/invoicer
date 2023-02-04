'use client'

import {useList} from '@/stores/store'
import {ChevronRightIcon, ChevronDownIcon} from "@heroicons/react/24/outline";

export default function Client({client}) {

    //Destructure
    const {selectedClientId} = useList()

    // Class Hack
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handleCompanyClick = (client) => {
        //find company in list by ID and set expanded flag to true
        if (client.id === selectedClientId) useList.setState({selectedClientId: null, selectedClient: {}})
        else useList.setState({selectedClientId: client.id, selectedClient: client})

        //Get invoices to display
        // getInvoices(client.id)

    }

    return (
        <button className={classNames(
            client.id === selectedClientId
                ? 'border-b border-gray-300 rounded-t'
                : 'rounded',
            "bg-white px-4 py-5 sm:px-6 bg-gradient-to-r from-sky-100 to-indigo-200 shadow-xl flex cursor-pointer justify-between w-full"
        )} onClick={() => {
            handleCompanyClick(client)
        }}>
            <span className={"flex space-x-4"}>
                <p className="text-lg font-medium leading-6 text-gray-900 pt-0.5">Company:</p>
                <p className="text-lg font-normal text-gray-800">{client.company} | {client.firstName} {client.lastName}</p>
            </span>
            <span className={"h-5 w-5 my-auto pt-.75"}>
                {(selectedClientId === client.id)
                    ? <ChevronDownIcon/>
                    : <ChevronRightIcon/>}
            </span>
        </button>
    )

}
