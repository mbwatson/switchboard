import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { Paragraph } from '../Typography'

export const FormControl = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const TextareaInput = styled.textarea`
    width: 100%;
    resize: vertical;
    min-height: 100px;
    max-height: 300px;
    letter-spacing: 1px;
    color: var(--color-black);
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--color-black);
    outline: 0;
    transition: box-shadow 500ms, border 250ms;
    &:focus {
        border: 1px solid var(--color-primary);
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`

export const Select = styled.select`
    width: 100%;
    letter-spacing: 1px;
    background-color: #fff;
    color: var(--color-black);
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--color-black);
    outline: 0;
    transition: box-shadow 500ms, border 250ms;
    &:focus {
        border: 1px solid var(--color-primary);
        box-shadow: 0 0 6px 1px rgba(var(--color-primary-shadow));
    }
`

export const Option = styled.option`
    padding: 1rem;
    border: 1px solid var(--color-primary);
`

export const MessageTypeSelect = () => {
    return (
        <Select name="message-type-select" id="message-type-select">
            <Option value="asd">asd</Option>
            <Option value="qwe">qwe</Option>
            <Option value="dfg">dfg</Option>
        </Select>
    )
}

export const ContactForm = props => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState()
    const [messageSent, setMessageSent] = useState(false)
    
    const handleChangeMessage = event => {
        setMessage(event.target.value)
        console.log(message)
    }

    const handleSubmitMessage = event => {
        console.log('Submitting message:', message)
        setMessageSent(true)
    }

    return !messageSent ? (
        <FormControl>
            <MessageTypeSelect />
            <TextareaInput placeholder="Enter message" value={ message } onChange={ handleChangeMessage } />
            <Button onClick={ handleSubmitMessage }>Submit</Button>
        </FormControl>
    ) : (
        <Paragraph style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem' }}>
            Thanks&mdash;your feedback is appreciated!
        </Paragraph>
    )
}
