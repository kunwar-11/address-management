import React from 'react'
import AddressCard from './AddressCard'
import {useAdress} from '../hooks'
const ShowAddress = () => {
    const {address} = useAdress()
    return (
        <div>
            <AddressCard />
        </div>
    )
}

export default ShowAddress
