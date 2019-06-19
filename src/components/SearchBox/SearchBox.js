import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Button'

export const SearchInputContainer = styled.div`
    position: relative;
    z-index: 1;
`

export const SearchInput = styled.input`
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    transform: translateY(${ props => props.open ? '0%' : '-100%' });
    width: 100%;
    height: 3rem;
    border: 0;
    outline: none;
    background-color: var(--color-real-black);
    padding: 0.5rem 1rem;
    letter-spacing: 1px;
    color: var(--color-grey);
    transition: transform 250ms ease-out;
    &::-webkit-input-placeholder { transition: opacity 250ms; opacity: 0.5; }
    &::-moz-placeholder { transition: opacity 250ms; opacity: 0.5; }
    &:hover, &:focus {
        &::-webkit-input-placeholder { transition: opacity 250ms; opacity: 0.25; }
        &::-moz-placeholder { transition: opacity 250ms; opacity: 0.25; }
    }
`

const Instructions = styled.div`
    position: absolute;
    right: 1rem;
    top: 0;
    transform: translateY(50%);
    color: var(--color-grey);
    font-size: 75%;
    transition: opacity 500ms;
    opacity: ${ props => props.visible ? 0.5 : 0};
`

export const SearchButtonContainer = styled(Button)`
    background-color: transparent;
`

export const SearchBox = ({ open, closeSearchHandler, searchHandler }) => {
    const [query, setQuery] = useState('')
    const inputElement = useRef()

    useEffect(() => {
        if (open) inputElement.current.focus()
    }, [open])

    const handleChangeQuery = event => setQuery(event.target.value)
    const handleKeyDown = event => {
        if (event.key === 'Enter') searchHandler()
        if (event.key === 'Escape') closeSearchHandler()
    }

    return (
        <SearchInputContainer showInstructions={ query !== '' }>
            <SearchInput
                ref={ inputElement }
                open={ open }
                placeholder="Search..."
                value={ query }
                onChange={ handleChangeQuery }
                onKeyDown={ handleKeyDown }
            />
            { open && <Instructions visible={ query !== '' }>Press Enter</Instructions> }
        </SearchInputContainer>
    )
}
