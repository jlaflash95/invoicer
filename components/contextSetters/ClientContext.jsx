'use client'
import {useClientContext} from "@/context/ClientContext";

const ClientContext = ({clients}) => {

    const {setClients} = useClientContext()
    setClients(clients)

    return (
        <></>
    )

}
export default ClientContext
