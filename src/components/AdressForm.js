import React, { useState } from 'react'
import {useAdress} from '../hooks'
import {useAddressDetails} from '../hooks'
import StateDropdown from './StateDropdown'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
const AdressForm = () => {
    const {setAddress , setRoute} = useAdress();
    const {name , setName , mobile , setMobile , pin , setPin , houseName , sethouseName , area , setArea , landmark , setLandMark , town , setTown , state , setState} = useAddressDetails();
    const [error , setError] = useState(false)
    const formSubmitHandler = (e) => {
        e.preventDefault()
        if(name === '' || mobile === '' || pin === '' || houseName === '' || area === '' || town === '' || state === 'Select State') {
            setError(true)
            console.log('error')
        }
        else {
            setError(false);
            setAddress(prev => prev.concat({id : uuidv4() , name , mobile , pin , houseName , area , landmark , town , state}))
            setName('');
            setMobile(null);
            setPin(null);
            sethouseName('');
            setArea('');
            setLandMark('');
            setTown('');
            setState('');
            console.log('no error')
            setRoute('showAddress')
        }
    }
    const formResetHandler = (e) => {
        e.preventDefault();
        setName('');
        setMobile(null);
        setPin(null);
        sethouseName('');
        setArea('');
        setLandMark('');
        setTown('');
        setState('');
    }
    const mobileNumberHandler = (e) => {
            let pattern=/^[0-9]{0,10}$/;
            if(pattern.test(e.target.value)) {
                setMobile(e.target.value)
            }
            
    }
    const pinCodeHandler = (e) => {
        let pattern=/^[0-9]{0,6}$/;
        if(pattern.test(e.target.value)) {
            setPin(e.target.value)
        }
    }

    return (
        <StyledForm>
            <h2>Add Address</h2>
            <label htmlFor="name">Full Name (First and Last name)</label>
            <StyledInput maxLength = "50" type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
            <label htmlFor="mobilenumber">Mobile Number</label>
            <StyledInput maxLength = "50" type="number" placeholder = '10 digit mobile number without prefix' value = {mobile || ''} onChange = {mobileNumberHandler}/>
            <label htmlFor="pin">Pin Code</label>
            <StyledInput maxLength = "50" type="number" placeholder = '6 digit Pin Code ' value = {pin || ''} onChange = {pinCodeHandler}/>
            <label htmlFor="address">Flat, House no., Building, Company, Apartment</label>
            <StyledInput maxLength = "50" type="text" value = {houseName} onChange = {(e) => sethouseName(e.target.value)}/>
            <label htmlFor="area">Area, Colony, Street, Sector, Village</label>
            <StyledInput maxLength = "50" type="text" value = {area} onChange = {(e) => setArea(e.target.value)}/>
            <label htmlFor="landmark">Landmark</label>
            <StyledInput maxLength = "50" type="text" placeholder = 'E.g. Near Shiv Mandir , Behind Mannu Cinema Hall, etc' value = {landmark} onChange = {(e) => setLandMark(e.target.value)}/>
            <label htmlFor="town">Town / City</label>
            <StyledInput maxLength = "50" type="text" value = {town} onChange = {(e) => setTown(e.target.value)}/>
            <label htmlFor="state">State / Province / Region</label>
            <StateDropdown state = {state} setState = {setState}/>
            <StyledDiv>
                <StyledButton onClick = {formResetHandler}>Reset</StyledButton>
                <StyledButton  onClick = {formSubmitHandler}>Save</StyledButton>
            </StyledDiv>
        </StyledForm>
    )
}
const StyledForm = styled.form`
    display: flex;
    flex-direction : column;
    max-width : 450px;
    margin : auto;
    background-color : #FAF9F6;
    padding : 1rem;
    border : 2px solid #f0c14b; 
    border-radius : 0.5rem;
`
const StyledInput = styled.input`
    padding : 0.3rem 1rem;
    margin : 1rem 0rem;
    background-color : #FAF9F6;
    border : 1px solid #a6a6a6;
    border-radius : 3px;
    &:focus{
        outline : 0 !important;
        border : 2px solid #f0c14b;  
    }
`

const StyledButton = styled.button`
    padding : 0.5rem 1.5rem;
    background-color : #f0c14b;
    font-weight : bold;
    border-style : none;
    border-radius : 0.5rem;
    outline : none;
    margin : 0.5rem 0rem;
`
const StyledDiv = styled.div`
    display : flex;
    justify-content : space-evenly;
`
export default AdressForm
