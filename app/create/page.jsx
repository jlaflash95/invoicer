import Decision from '@/components/create/decision'
import {useList} from "@/stores/store";

// Fetch Data
const getClients = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/clients/records')
    let clients = await res.json()
    useList.setState({clients: clients?.items})
}


export default async function Create() {

    //Get data
    await getClients()
    let clients = useList.getState().clients

    return (
        <Decision clients={clients}/>
    )
}
