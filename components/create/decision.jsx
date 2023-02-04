"use client"
import {useList} from '@/stores/store'
import {BanknotesIcon, UserIcon} from "@heroicons/react/24/outline";
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import Client from '@/components/create/client/Client'
import Invoice from '@/components/create/invoice/Invoice'
import Proposal from '@/components/create/proposal/Proposal'
import Quote from '@/components/create/quote/Quote'
import {useState} from "react";


export default function Decision({clients}) {

    //Create state on client-side from server-side props
    useList.setState({clients: clients})

    const items = [
        {
            ref: 'client',
            name: 'New Client',
            description: 'Create a new client to manage invoices under.',
            iconColor: 'bg-red-200',
            icon: UserIcon,
        },
        {
            ref: 'quote',
            name: 'New Quote',
            description: 'Create a new quote for an existing client.',
            iconColor: 'bg-yellow-300',
            icon: BanknotesIcon,
        },
        {
            ref: 'proposal',
            name: 'New Proposal',
            description: 'Link a new mockup for an existing client.',
            iconColor: 'bg-gradient-to-br from-sky-300 to-indigo-300',
            icon: BanknotesIcon,
        },
        {
            ref: 'invoice',
            name: 'New Invoice',
            description: 'Create a new invoice for an existing client.',
            iconColor: 'bg-green-400',
            icon: BanknotesIcon,
        }
    ]

    const [decision, setDecision] = useState('')

    const handleDecision = (ref) => {

        if (ref === 'client') {
            setDecision("client")
        } else if (ref === 'invoice') {
            setDecision("invoice")
        } else if (ref === 'quote') {
            setDecision("quote")
        } else if (ref === 'proposal') {
            setDecision("proposal")
        }

    }


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    if (decision === "") {
        return (
            <div className={"min-h-screen bg-gray-100 flex justify-center items-center"}>
                <div className="mx-auto max-w-lg bg-gray-50 p-8 rounded shadow-xl h-fit -translate-y-1/4">
                    <h2 className="text-lg font-medium text-gray-900">What would you like to create?</h2>
                    <p className="mt-1 text-sm text-gray-500">Get started by selecting to create a new client or a new
                        invoice.</p>
                    <ul role="list" className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
                        {items.map((item, itemIdx) => (
                            <li key={itemIdx} onClick={() => handleDecision(item.ref)} className={"cursor-pointer"}>
                                <div className="group relative flex items-start space-x-3 py-4">
                                    <div className="flex-shrink-0">
                                <span
                                    className={classNames(item.iconColor, 'inline-flex items-center justify-center h-10 w-10 rounded-lg')}
                                >
                                  <item.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-sm font-medium text-gray-900">
                                            <a href={item.href}>
                                                <span className="absolute inset-0" aria-hidden="true"/>
                                                {item.name}
                                            </a>
                                        </div>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                    <div className="flex-shrink-0 self-center">
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                          aria-hidden="true"/>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else if (decision === 'client') {
        return (
            <Client setDecision={setDecision}/>
        )
    } else if (decision === 'invoice') {
        return (
            <Invoice setDecision={setDecision}/>
        )
    } else if (decision === 'proposal') {
        return (
            <Proposal setDecision={setDecision}/>
        )
    } else if (decision === 'quote') {
        return (
            <Quote setDecision={setDecision}/>
        )
    }

}
