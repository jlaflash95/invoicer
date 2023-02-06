import Decision from '@/components/create/decision'

// Fetch Data
const getClients = async () => {
    const res = await fetch('https://invoicer.pockethost.io/api/collections/clients/records')
    let clients = await res.json()
    return clients?.items
}


export default async function Create() {

    //Get data
    const clients = await getClients()

    return (
        <Decision clients={clients}/>
    )
}
