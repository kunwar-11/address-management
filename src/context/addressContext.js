import {createContext, useState} from 'react'

export const Address = createContext();

export const AddressContext = ({children}) => {
    const [address , setAddress] = useState([]);
    const [route , setRoute] = useState('showAddress');
    const [edit , setEdit] = useState(false)
    return (
        <Address.Provider value = {{address , setAddress , route , setRoute , edit , setEdit}}>
            {children}
        </Address.Provider>
    )
}