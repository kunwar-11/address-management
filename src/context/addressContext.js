import {createContext, useState} from 'react'

export const Address = createContext();

export const AddressContext = ({children}) => {
    const [address , setAddress] = useState([])
    return (
        <Address.Provider value = {{address , setAddress}}>
            {children}
        </Address.Provider>
    )
}