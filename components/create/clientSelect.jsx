"use client"
import {useEffect, useState} from 'react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {Combobox} from '@headlessui/react'
import {useClientContext} from "@/context/ClientContext";

// const clients = [
//     { id: 1, name: 'Leslie Alexander' },
//     // More users...
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ClientSelect() {

    const {clients, selectedClient, setSelectedClient} = useClientContext()

    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? clients
            : clients.filter((client) => {
                return client.company.toLowerCase().includes(query.toLowerCase()) || client.fullName.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox as="div" value={selectedClient} onChange={(client) => setSelectedClient(client)}>
            <Combobox.Label className="block text-sm font-medium text-gray-700">Select an existing client:</Combobox.Label>

            <div className="relative mt-1">

                <Combobox.Input
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(client) => client?.company}
                />

                <Combobox.Button
                    className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                    <Combobox.Options
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredPeople.map((client) => (
                            <Combobox.Option
                                key={client.id}
                                value={client}
                                className={({active}) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                    )
                                }
                            >
                                {({active, selected}) => (
                                    <>
                                        <span
                                            className={classNames('block truncate', selected && 'font-semibold')}>{client.company} | {client.fullName}</span>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active ? 'text-white' : 'text-indigo-600'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                            </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    )
}
