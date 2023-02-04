import Top from "@/components/invoice/top";
import Bottom from "@/components/invoice/bottom";
import FormActions from "@/components/general/formActions";


export default function PublicQuote({invoice}) {


    return (
        <div className={"bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen pt-10 text-gray-800 relative"}>
            <div className={"absolute top-0 right-8"}>
                <FormActions type={"invoice"}/>
            </div>
            <div
                className={"p-8 grid grid-cols-3 gap-x-4 gap-y-0 max-w-7xl mx-auto border border-[1px] border-gray-300 rounded border-opacity-60 bg-gray-100 shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"}>
                <Top invoice={invoice}/>
                <Bottom client={invoice.expand['client']}/>
                {/*<div className={"absolute -top-[7.25rem] right-0"}>*/}
            </div>
        </div>
    )
}
