import PublicQuoteComponent from '@/components/quote/views/public'

const getQuote = async (id) => {
    const res = await fetch(`https://invoicer.pockethost.io/api/collections/quotes/records?filter=(id="${id}")&expand=client`)
    const data = await res.json()
    return data?.items[0]
}
export default async function PublicQuote(searchParams) {

    const id = searchParams.params.id
    const quote = await getQuote(id)

    return (
        <PublicQuoteComponent quote={quote}/>
    )
}
