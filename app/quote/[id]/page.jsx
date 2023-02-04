import Internal from '@/components/quote/views/internal'

const getInvoice = async (id) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/invoices/records?filter=(id="${id}")&expand=client`)
    const data = await res.json()
    return data?.items[0]
}
export default async function Quote(searchParams) {

    const id = searchParams.params.id

    const quote = await getInvoice(id)

    return (
        <Internal quote={quote} id={id}/>
    )

}
