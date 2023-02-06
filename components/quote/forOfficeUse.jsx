"use client"
import {Fragment, useState, useEffect} from "react";
import {Switch} from "@headlessui/react";


export default function ForOfficeUse({quote}) {

    const {
        description,
        dueDate,
        dateSent,
        rate,
        hours,
    } = quote

    let estimatedCompletionDate = new Date(dueDate)
    estimatedCompletionDate = estimatedCompletionDate.setHours(estimatedCompletionDate.getHours() + ((hours / 8) * 24))
    estimatedCompletionDate = new Date(estimatedCompletionDate)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [paid, setPaid] = useState(false)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        setPaid(quote.paid)
        setComplete(quote.complete)
    }, [])

    const handleComplete = async () => {
        setComplete(!complete)

        //Update invoice in DB
        await fetch(`https://invoicer.pockethost.io/api/collections/invoices/records/${quote.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                complete: !complete
            })
        })
    }

    const handlePaid = async () => {
        setPaid(!paid)

        //Update invoice in DB
        await fetch(`https://invoicer.pockethost.io/api/collections/invoices/records/${quote.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                paid: !paid
            })
        })
    }

    return (
        <Fragment>
            <div className={"grid grid-cols-2 max-w-2xl mx-auto bg-gradient-to-r from-indigo-200 to-sky-200 p-8 mt-16 rounded relative"}>

                <p className="text-sm font-thin italic absolute top-2 left-1/2 -translate-x-1/2">
                    for office use only
                </p>


                <div className="col-span-1 pt-2 text-center my-auto">
                    <h1 className="text-xl font-bold">
                        Info
                    </h1>
                </div>
                <div className="col-span-1 text-center my-auto">
                    <h1 className="text-xl font-bold">
                        Actions
                    </h1>
                </div>

                <div className={"col-span-2 h-[1.5px] max-w-[98%] bg-gray-700 bg-opacity-50"}></div>

                <div className={"col-span-1 flex-col border-r-[1px] border-gray-700 border-opacity-30 pr-2 pt-5"}>

                    <div className={"flex justify-between"}>
                        <p className={"italic font-light"}>Date Sent</p><span
                        className={"flex-1 border-b-[1px] border-gray-700 border-opacity-30 mb-1.5"}></span><p
                        className={"italic font-light"}>{new Date(dateSent).toLocaleDateString('en-US')}</p>
                    </div>

                    <div className={"flex justify-between"}>
                        <p className={"italic font-light"}>Project Hours</p><span
                        className={"flex-1 border-b-[1px] border-gray-700 border-opacity-30 mb-1.5"}></span><p
                        className={"italic font-light"}>{hours} hours</p>
                    </div>

                    <div className={"flex justify-between"}>
                        <p className={"italic font-light"}>Project Rate</p><span
                        className={"flex-1 border-b-[1px] border-gray-700 border-opacity-30 mb-1.5"}></span><p
                        className={"italic font-light"}>${rate}/hr</p>
                    </div>

                    <div className={"flex justify-between"}>
                        <p className={"italic font-light"}>Projected Completion</p><span
                        className={"flex-1 border-b-[1px] border-gray-700 border-opacity-30 mb-1.5"}></span><p
                        className={"italic font-light"}>{estimatedCompletionDate.toLocaleDateString('en-US')}</p>
                    </div>

                </div>

                <div className={"col-span-1 flex-col space-y-2 mt-5"}>

                    <div className={"flex ml-20 items-center"}>

                        <Switch.Group as="div" className="flex items-center">
                            <Switch
                                checked={complete}
                                onChange={handleComplete}
                                className={classNames(
                                    complete ? 'bg-green-500' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                )}
                            >
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        complete ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            <Switch.Label as="span" className="ml-3">
                                <span className="text-sm font-medium text-gray-900">Completed?</span>
                            </Switch.Label>
                        </Switch.Group>

                    </div>

                    <div className={"flex ml-20 items-center"}>

                        <Switch.Group as="div" className="flex items-center">
                            <Switch
                                checked={paid}
                                onChange={handlePaid}
                                className={classNames(
                                    paid ? 'bg-green-500' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                )}
                            >
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        paid ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            <Switch.Label as="span" className="ml-3">
                                <span className="text-sm font-medium text-gray-900">Paid?</span>
                            </Switch.Label>
                        </Switch.Group>

                    </div>

                </div>
            </div>

            <div className={"pb-12"}></div>
        </Fragment>
    )
}
