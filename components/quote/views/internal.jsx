import Top from "@/components/Invoice/top";
import Bottom from "@/components/Invoice/bottom";
import InternalFormActions from "@/components/general/internalFormActions";
import ForOfficeUse from "@/components/Invoice/forOfficeUse";


export default function Internal({quote, id}) {

    return (
        <div className={"bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen pt-10 text-gray-800 relative"}>
            <div className={"absolute top-0 right-10"}>
                <InternalFormActions id={id}/>
            </div>
            <div
                className={"p-8 grid grid-cols-3 gap-x-4 gap-y-0 max-w-7xl mx-auto border border-[1px] border-gray-300 rounded border-opacity-60 bg-gray-100 shadow-xl mt-20"}>
                <Top invoice={quote}/>
                <Bottom client={quote.expand['client']}/>
            </div>
            <ForOfficeUse invoice={quote}/>
        </div>
    )

}
