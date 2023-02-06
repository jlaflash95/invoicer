export default function Bottom() {

    const data = {
        phone: '+1 (715) 321-3386',
        email: 'jake@exalted.dev',
        website: 'exalted.dev'
    }

    return (
        <div className={"col-span-3"}>
            <div className={"pt-16 uppercase flex space-x-2 items-center ml-6"}>
                <p className={"text-lg font-light"}>Please make checks payable </p><span
                className={"lowercase italic font-medium"}>to</span><p className={"font-bold text-lg"}>Jacob LaFlash</p>
            </div>

            <div className={"h-[1px] bg-gray-700 bg-opacity-30 max-w-[97%] mx-auto"}></div>

            <div className={"flex py-4 justify-center"}>
                <p className={"uppercase text-6xl font-black ml-6"}>THANK YOU</p>
                <p className={"mx-4 mt-auto font-bold italic text-md mb-3"}>for</p>
                <p className={"uppercase text-lg font-bold mt-auto mb-2.5"}>
                    considering EXALTED DEVELOPMENT for your project.
                </p>
            </div>

            <div className={"h-[1px] bg-gray-700 bg-opacity-30 max-w-[97%] mx-auto"}></div>


            <div className={"flex justify-around pt-16"}>
                <div className={"basis-1/2 text-center"}>
                    <h2 className={"text-2xl font-bold uppercase"}>Questions? Contact Me:</h2>
                    <ul className={"text-start ml-16 mt-4 space-y-2"}>
                        <li className={"flex"}><p className={"text-lg font-bold"}>Phone:</p><span className={"flex-1 h-[.5px] bg-gray-200 mt-auto mb-1.5 mx-1"}></span><p className={"mr-16"}>{data.phone}</p></li>
                        <li className={"flex"}><p className={"text-lg font-bold"}>Email:</p><span className={"flex-1 h-[1px] bg-gray-200 mt-auto mb-1.5 mx-1"}></span><p className={"mr-16"}>{data.email}</p></li>
                        <li className={"flex"}><p className={"text-lg font-bold"}>Website:</p><span className={"flex-1 h-[1px] bg-gray-200 mt-auto mb-1.5 mx-1"}></span><p className={"mr-16"}>{data.website}</p></li>
                    </ul>
                </div>

                <div className={"basis-1/2 text-center"}>
                    <h2 className={"text-2xl font-bold uppercase "}>Terms & Conditions</h2>
                    <ul className={" text-center mt-4 font-thin tracking-tight space-y-2"}>
                        <li><p className={"-indent-3"}>Development will start on a date determined by both parties.</p></li>
                        <li><p className={"-indent-3"}>50% of the quote total is due before development starts.</p></li>
                        <li><p className={"-indent-3"}>The remaining costs incurred are paid on delivery.</p></li>
                    </ul>
                </div>
            </div>

            <div className={"flex justify-center pb-4 pt-6"}>
                <p className={"text-center italic font-medium text-sm mt-2 max-w-lg drop-shadow-md"}>Actual development costs may differ slightly from the original quote. You agree to pay billed overages, if any, on receipt of the final invoice.</p>
            </div>

        </div>
    )
}
