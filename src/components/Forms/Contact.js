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

export const ContactForm = props => {
    const [feedback, setFeedback] = useState('')
    const [feedbackSent, setFeedbackSent] = useState(false)
    
    const handleChangeFeedback = event => {
        setFeedback(event.target.value)
        console.log(feedback)
    }

    const handleSubmitFeedback = event => {
        console.log('Submitting feedback:', feedback)
        setFeedbackSent(true)
    }

    return !feedbackSent ? (
        <FormControl>
            <TextareaInput placeholder="Enter feedback" value={ feedback } onChange={ handleChangeFeedback } />
            <Button onClick={ handleSubmitFeedback }>Submit</Button>
        </FormControl>
    ) : (
        <Paragraph style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem' }}>
            Thanks&mdash;your feedback is appreciated!
        </Paragraph>
    )
}
