"use client"
import {ArrowDownTrayIcon, ClipboardDocumentIcon} from "@heroicons/react/24/outline";


export default function InternalFormActions({id}) {

    const handleDownload = () => {

    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`https://exalted.dev/public/quote/${id}`)
    }

    return (
        <div className={"flex-col mx-auto max-w-xs rounded py-4"}>
            <div className={"flex justify-center space-x-10"}>

                {/*Download*/}
                <button className={"h-10 w-10 text-gray-800 bg-transparent drop-shadow-md hover:shadow-md hover:rounded-lg hover:bg-gray-50 px-1 py-2 rounded-none"} onClick={handleDownload}>
                        <ArrowDownTrayIcon />
                </button>

                {/*Copy Link*/}
                <button className={"h-10 w-10 text-gray-800 bg-transparent drop-shadow-md hover:shadow-md hover:rounded-lg hover:bg-gray-50 px-1 py-2 rounded-none"} onClick={handleCopyLink}>
                        <ClipboardDocumentIcon />
                </button>

                {/*Visit Payment Details*/}

            </div>
        </div>
    )
}
