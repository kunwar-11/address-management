import React from 'react'
import styled from 'styled-components'
import {useAdress} from '../hooks'
const AddressCard = ({eachAdd : {name , mobile , pin , houseName , area , landmark , town , state , id}}) => {
    const {address , setAddress , edit , setEdit} = useAdress()
    const removeAddressHandler = (id) => {
        setAddress(address.filter(each => each.id !== id))
    }
    return (
        <StyledDiv>
            <div style = {{flexGrow : 1}}>
            <h4>{name}</h4>
            <p>{`${houseName},
            ${area},
            ${landmark? `${landmark},` :''}
            ${town},
            ${state},
            ${pin}`}</p>
            <h4>{mobile}</h4>
            </div>
            <div style = {{display : 'flex' , justifyContent : 'space-around'}}>
                <button onClick = {() => setEdit(true)}>Edit</button>
                <button onClick = {() => removeAddressHandler(id)}>Remove</button>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    max-width : 350px;
    width : 100%;
    padding : 1rem;
    border : 1px solid #f0c14b;
    margin : 1rem;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
`

export default AddressCard
