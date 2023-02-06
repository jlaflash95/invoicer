import {Fragment} from "react";
export default async function Top({quote}) {


    let {
        dateSent,
        expand: {client},
        details,
        subTotal,
        taxRate,
        total,
        number
    } = quote

    const data = {
        companyName: 'Exalted Development',
        name: "Jacob LaFlash",
        logoUrl: 'https://i.imgur.com/1ZQ1Z1M.png',
        logoLetters: "ED"
    }

    const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }

    const dueDate = new Date(dateSent)
    dueDate.setDate(dueDate.getDate() + 7)

    return (
        <Fragment>

            <div className={"col-span-3"} id={"head"}>
                <div className={"flex justify-between"}>
                    <div className={"flex-col"}>
                        <h1 className={"text-lg font-normal text-gray-600 drop-shadow-md ml-1"}>{data.companyName}</h1>
                        <div className={"flex items-end flex-1"}><h1 className={"text-7xl font-bold"}>QUOTE</h1> <span
                            className={"pl-4 font-thin"}>Number | #{number} </span></div>
                    </div>
                    <div className={"basis-1/3 flex-col justify-center"}>
                        <div
                            className={"h-24 w-24 bg-gradient-to-l from-sky-50 to-indigo-50 shadow-lg rounded-lg ml-auto mb-3 mr-1 flex justify-center items-center"}>
                            <p className={"text-6xl font-light tracking-tightest text-gray-600 drop-shadow-md"}>{data.logoLetters}</p></div>
                        {/*<img src={logoUrl} alt={`${companyName} Logo`} className={"w-20 h-20 ml-auto mb-3 mr-1"}/>*/}
                    </div>
                </div>
            </div>

            <div
                className={"col-span-3 pb-16 bg-gradient-to-r from-sky-200 to-indigo-200 bg-opacity-90 rounded-t mt-8 space-y-4 p-4"}>

                <div
                    className={"grid grid-cols-12 text-xl font-medium border-b-[1px] border-gray-700 border-opacity-30"}>
                    <div className={"col-span-8"}>
                        <p className={"pl-5"}>Proposed work to be done for: <span
                            className={"font-bold pl-3"}>{client.company}</span></p>
                    </div>

                    <div className={"col-span-1 text-center"}>
                        Hours
                    </div>

                    <div className={"col-span-1 text-center"}>
                        Rate
                    </div>

                    <div className={"col-span-2 text-center"}>
                        Total Cost
                    </div>
                </div>

                {details?.map((detail, index) => (
                    <div key={detail.id}
                         className={`grid grid-cols-12 p-1 ${(index % 2 !== 0) && "bg-gray-100 rounded py-2"}`}>
                        <div className={"col-span-8 px-4 -indent-2.5 pr-16"}>
                            <span className={"pr-1"}>&#x2022;</span>{detail.itemName} -- {detail.itemDescription}
                        </div>
                        <div className={"col-span-1 my-auto text-center"}>
                            {detail.hours}
                        </div>
                        <div className={"col-span-1 my-auto text-center pl-3"}>
                            ${detail.rate}/hr
                        </div>
                        <div className={"col-span-2 my-auto indent-[4.5rem]"}>
                            {`$${(detail.hours * detail.rate).toFixed(2)}`}
                        </div>
                    </div>
                ))}

            </div>

            <div className={"col-span-3 bg-gradient-to-r from-sky-200 to-indigo-200 bg-opacity-90"}>
                <div className={"bg-gray-700 bg-opacity-30 h-[1px] mx-auto max-w-[97%]"}></div>
            </div>

            <div className={"col-span-3 pb-6 bg-gradient-to-r from-sky-200 to-indigo-200 bg-opacity-90 rounded-b space-y-4 p-4 shadow-md"}>
                <div className={"grid grid-cols-12"}>

                    <div className={"col-span-9 row-span-3"}>
                        <div className={"flex justify-center mt-6"}>
                            <p className={"text-2xl font-medium italic mr-5"}>Response Due: </p><span className={"font-bold italic text-2xl"}>{new Date(dueDate).toLocaleDateString('en-US', dateOptions)}</span>
                        </div>
                        <div className={"flex justify-center"}>
                            <p className={"italic font-thin text-sm mt-2 drop-shadow-md"}>Wireframe mockups are available on request at no additional cost.</p>
                        </div>
                    </div> {/* Empty space */}



                    <div className={"col-span-1 text-end my-auto"}>
                        <p><i>subtotal:</i></p>
                    </div>

                    <div className={"col-span-2 my-auto indent-[4.5rem]"}>
                        <p className={"italic text-xl"}>${subTotal.toFixed(2)}</p>
                    </div>



                    <div className={"col-span-1 text-end my-auto"}>
                        <p className={"italic"}>tax:</p>
                    </div>

                    <div className={"col-span-2 my-auto indent-[4.5rem]"}>
                        <p className={"italic text-xl"}>{`$${(subTotal * (taxRate/100)).toFixed(2)}`}</p>
                    </div>



                    <div className={"col-span-1 text-end my-auto"}>
                        <p className={"font-bold italic"}>total:</p>
                    </div>

                    <div className={"col-span-2 my-auto indent-[4.5rem]"}>
                        <p className={"font-bold italic text-xl"}>${total.toFixed(2)}</p>
                    </div>

                </div>
            </div>


        </Fragment>
    )

}
