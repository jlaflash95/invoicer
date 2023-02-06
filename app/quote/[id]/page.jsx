import Internal from '@/components/quote/views/internal'

const getQuote = async (id) => {
    const res = await fetch(`https://invoicer.pockethost.io/api/collections/quotes/records?filter=(id="${id}")&expand=client`)
    const data = await res.json()
    return data?.items[0]
}
export default async function Quote(searchParams) {

    const id = searchParams.params.id
    const quote = await getQuote(id)

    return (
        <Internal quote={quote} id={id}/>
    )

}
