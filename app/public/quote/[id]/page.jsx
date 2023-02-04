import Public from '@/components/quote/views/public'

const getInvoice = async (id) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/invoices/records?filter=(id="${id}")&expand=client`)
    const data = await res.json()
    return data?.items[0]
}
export default async function PublicQuote(searchParams) {

    const quote = await getInvoice(searchParams.params.id)

    return (
        <Public quote={quote}/>
    )
}
