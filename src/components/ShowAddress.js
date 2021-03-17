import React from 'react'
import AddressCard from './AddressCard'
import {useAdress} from '../hooks'
import styled from 'styled-components'
const ShowAddress = () => {
    const {address , setRoute} = useAdress()
    return (
        <div>
            <button onClick = {() => setRoute('newAddress')}>Add New Address</button>
            <StyledDiv>
                {address.length > 0 && address.map(eachAdd => <AddressCard eachAdd = {eachAdd}/>)}
            </StyledDiv>
        </div>
    )
}
const StyledDiv = styled.div`
    display : flex;
    flex-wrap : wrap;
    margin : 1rem;
`
export default ShowAddress
