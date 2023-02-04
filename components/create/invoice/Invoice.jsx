"use client"
import {useState} from "react";
import ClientSelect from "@/components/create/clientSelect";
import {useInvoiceCreation} from "@/stores/store";
import {ArrowSmallLeftIcon, PlusIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/navigation";

export default function Invoice({setDecision}) {

    const router = useRouter()

    //Component State
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [taxRate, setTaxRate] = useState("")
    const [items, setItems] = useState([
        {
            id: Math.floor(Math.random() * 1000),
            itemName: "",
            rate: "",
            hours: "",
            itemDescription: ""
        }
    ])

    const selectedClient = useInvoiceCreation.getState().selectedClient

    //Component Functions
    const handleDueDate = (e) => {
        setDueDate(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleTaxRate = (e) => {
        setTaxRate(e.target.value)
    }

    const handleTaxRateBlur = (e) => {
        let incomingRate = +e.target.value
        setTaxRate(incomingRate.toFixed(2))
    }

    const handleItemName = (e, index) => {
        let tempArr = [...items]
        tempArr[index].itemName = e.target.value
        setItems(tempArr)
    }

    const handleHourChange = (e, index) => {
        let tempArr = [...items]
        tempArr[index].hours = e.target.value
        setItems(tempArr)
    }

    const handleHourBlur = (e, index) => {
        e.preventDefault()
        let incomingHours = +e.target.value
        let tempArr = [...items]
        tempArr[index].hours = incomingHours.toFixed(2)
        setItems(tempArr)
    }

    const handleRateChange = (e, index) => {
        let tempArr = [...items]
        tempArr[index].rate = e.target.value
        setItems(tempArr)
    }
    const handleRateBlur = (e, index) => {
        e.preventDefault()
        let incomingRate = +e.target.value
        let tempArr = [...items]
        tempArr[index].rate = incomingRate.toFixed(2)
        setItems(tempArr)
    }

    const handleItemDescription = (e, index) => {
        let tempArr = [...items]
        tempArr[index].itemDescription = e.target.value
        setItems(tempArr)
    }

    const handleNewItem = (e) => {
        e.preventDefault()
        setItems([...items, {
            id: Math.floor(Math.random() * 1000),
            itemName: "",
            rate: "",
            hours: "",
            itemDescription: ""
        }])
    }

    const handleRemoveItem = (e, index) => {
        let tempArr = [...items]
        tempArr.splice(index, 1)
        console.log(tempArr)
        setItems(tempArr)
    }

    const handleClear = () => {
        setItems([{id: Math.floor(Math.random() * 1000), itemName: "", rate: "", hours: "", itemDescription: ""}])
        //Figure out how to send back to decision page.jsx.
    }

    const createInvoice = async (e) => {
        e.preventDefault()

        //Analyze Items for Top Level Data
        let hours = 0;
        let rate = 0;
        let subTotal = 0;
        let total = 0;

        items.forEach(item => {
            hours += +item.hours
            rate += +item.rate
            subTotal += item.rate * item.hours
        })

        hours = hours.toFixed(2)
        rate = (rate / items.length).toFixed(2)
        total = (subTotal * (1 + (+taxRate / 100))).toFixed(2)
        subTotal = subTotal.toFixed(2)

        //Create object for database
        let invoice = {
            number: Math.floor(Math.random() * 1000),
            description,
            hours: +hours,
            rate: +rate,
            dueDate: new Date(dueDate),
            dateSent: new Date(),
            client: selectedClient.id,
            complete: false,
            paid: false,
            details: items,
            subTotal: +subTotal,
            taxRate: +taxRate,
            total: +total,
        }

        // console.log("Invoice:", invoice)
        // console.log("Invoice Items:", invoice.details)

        //Database actions
        //Create new Invoice
        let res = await fetch('http://127.0.0.1:8090/api/collections/invoices/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(invoice)
        })
        let data = await res.json()

        await fetch(`http://127.0.0.1:8090/api/collections/clients/records/${selectedClient.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                invoices: [...selectedClient.invoices, data.id]
            })
        })

        await router.push('/')

    }

    return (
        <div className={"bg-gray-100 py-10 pt-20 min-h-screen"}>
            <form className="space-y-6 max-w-7xl mx-auto" onSubmit={createInvoice} action={'#'}>

                <div className={"flex"}>
                    <button  className={"h-8 w-8"} type={"button"} onClick={() => setDecision("")}><ArrowSmallLeftIcon /></button><span className={"my-auto ml-2 text-lg font-medium"}> Go Back</span>
                </div>

                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Invoice Details</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                This is the basic information for the invoice, the general scope of the work etc.
                            </p>
                        </div>
                        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">

                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    Due Date
                                </label>
                                <div className="mt-1"></div>
                                <input
                                    type="date"
                                    name="dueDate"
                                    id="dueDate"
                                    value={dueDate}
                                    onChange={handleDueDate}
                                    className={"block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"}
                                ></input>

                            </div>

                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <div className="mt-1">
                                <textarea
                                    onChange={(e) => handleDescription(e)}
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Create an ecommerce store featuring... "
                                    defaultValue={''}
                                />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Broad description of the total project.</p>
                            </div>

                            <div className={"flex-col"}>
                                <label htmlFor="tax-rate" className="block text-sm font-medium text-gray-700">
                                    Tax Rate
                                </label>
                                    <div className={"flex"}>
                                        <input
                                            onChange={(e) => handleTaxRate(e)}
                                            onBlur={(e) => handleTaxRateBlur(e)}
                                            value={taxRate}
                                            type="text"
                                            name="invoice-hours"
                                            id="invoice-hours"
                                            className="block basis-1/12 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-right"
                                            placeholder="6.50"
                                        />
                                        <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 mr-4">
                                            %
                                        </span>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Invoice Items</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                This information will be displayed to the client in a breakdown.
                            </p>
                        </div>
                        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">


                            {/*Map Items*/}

                            {items.map((item, index) => (
                                <div key={item.id}>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="company-website"
                                                   className="block text-sm font-medium text-gray-700">
                                                Item #{index+1}
                                                <span className={"inline-block pl-3"}>
                                                    {(index > 0) && <button type={"button"} onClick={(e) => handleRemoveItem(e, index)} className={"font-medium text-red-400 cursor-pointer"}>Remove</button>}
                                                </span>
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">

                                                <input
                                                    onChange={(e) => handleItemName(e, index)}
                                                    value={item.name}
                                                    type="text"
                                                    name="invoice-item"
                                                    id="invoice-item"
                                                    className="block basis-1/2 w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mr-4"
                                                    placeholder="Development Services"
                                                />

                                                <input
                                                    onChange={(e) => handleHourChange(e, index)}
                                                    onBlur={(e) => handleHourBlur(e, index)}
                                                    value={item.hours}
                                                    type="text"
                                                    name="invoice-hours"
                                                    id="invoice-hours"
                                                    className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-right"
                                                    placeholder="30.00"
                                                />
                                                <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 mr-4">
                                                    Hours
                                                </span>

                                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                    $/hr
                                                </span>
                                                <input
                                                    onChange={(e) => handleRateChange(e, index)}
                                                    onBlur={(e) => handleRateBlur(e, index)}
                                                    value={item.rate}
                                                    type="text"
                                                    name="invoice-rate-#number"
                                                    id="invoice-rate-#number"
                                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="35.00"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 pt-2">
                                            Description
                                        </label>
                                        <div className="mt-1">
                                <textarea
                                    onChange={(e) => handleItemDescription(e, index)}
                                    value={item.description}
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Planning and research for the project..."
                                />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Brief description of the item.</p>
                                    </div>

                                    {(index + 1 !== items.length) &&
                                        <div className={"w-full h-[1px] bg-gray-200 my-4"}></div>
                                    }

                                </div>
                            ))}

                            <div className={"flex justify-center"}>
                                <button
                                    type={"button"}
                                    onClick={handleNewItem}
                                >
                                    <PlusIcon className={"h-6 w-6"} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Client</h3>
                            <p className="mt-1 text-sm text-gray-500">Select a client to generate this invoice for.</p>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <ClientSelect/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex justify-end">
                    <button
                        onClick={handleClear}
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}
