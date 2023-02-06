import Public from '@/components/invoice/views/public'

const getInvoice = async (id) => {
    const res = await fetch(`https://invoicer.pockethost.io/api/collections/invoices/records?filter=(id="${id}")&expand=client`)
    const data = await res.json()
    return data?.items[0]
}
export default async function Invoice(searchParams) {

    const invoice = await getInvoice(searchParams.params.id)

    return (
        <Public invoice={invoice}/>
    )

}
