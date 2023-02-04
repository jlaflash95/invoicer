"use client"
import {ArrowDownTrayIcon, BanknotesIcon, CheckIcon} from "@heroicons/react/24/outline";


export default function FormActions({type}) {


    return (
        <div className={"flex-col mx-auto max-w-xs rounded py-4"}>
            <div className={"flex justify-center space-x-10"}>

                <button className={"h-10 w-10 text-gray-800 bg-transparent drop-shadow-md hover:shadow-md hover:rounded-lg hover:bg-gray-50 px-1 py-2 rounded-none"}>
                    <span className={""}>
                        <ArrowDownTrayIcon />
                    </span>
                </button>


                {(type === "invoice") ? (
                    <button className={"h-10 w-10 text-gray-800 bg-transparent drop-shadow-md hover:shadow-md hover:rounded-lg hover:bg-gray-50 px-1 py-2 rounded-none"}>
                    <span className={""}>
                        <BanknotesIcon />
                    </span>
                    </button>
                ) : (
                    <button className={"h-10 w-10 text-gray-800 bg-transparent drop-shadow-md hover:shadow-md hover:rounded-lg hover:bg-gray-50 px-1 py-2 rounded-none"}>
                    <span className={""}>
                        <CheckIcon />
                    </span>
                    </button>
                )}

            </div>
        </div>
    )
}
