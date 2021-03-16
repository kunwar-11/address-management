import {useContext, useState} from 'react'
import {Address} from './context/addressContext'

export const useAdress = () => useContext(Address)

export const useAddressDetails = () => {
    const [name , setName] = useState('');
    const [mobile , setMobile] = useState(null);
    const [pin , setPin] = useState(null);
    const [houseName , sethouseName] = useState('');
    const [area , setArea] = useState('');
    const [landmark , setLandMark] = useState('');
    const [town , setTown] = useState('');
    const [state , setState] = useState('');

    return {name , setName , mobile , setMobile , pin , setPin , houseName , sethouseName , area , setArea , landmark , setLandMark , town , setTown , state , setState}
}