'use client'

import {createContext, useContext, Dispatch, SetStateAction, useState} from "react";

const ClientContext = createContext({
    clients: [],
    setClients: () => {},
    selectedClient: "",
    setSelectedClient: () => {}
})

export const ClientContextProvider = ({children}) => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState("");

    return (
        <ClientContext.Provider value={{
            clients,
            setClients,
            selectedClient,
            setSelectedClient
        }}>
            {children}
        </ClientContext.Provider>
    )
}

export const useClientContext = () => useContext(ClientContext);
