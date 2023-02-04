import Internal from '@/components/invoice/views/internal'

const getInvoice = async (id) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/invoices/records?filter=(id="${id}")&expand=client`)
    const data = await res.json()
    return data?.items[0]
}
export default async function Invoice(searchParams) {

    const id = searchParams.params.id

    const invoice = await getInvoice(id)

    return (
        <Internal invoice={invoice} id={id}/>
    )

}
