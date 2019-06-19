import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuItem = styled(Link)`
    border: 0;
    cursor: pointer;
    padding: 0.5rem 1.5rem 0.5rem 3rem;
    transition: color 250ms;
    color: var(--color-black);
    transition: background-color 500ms, opacity 250ms;
    background-color: transparent;
    letter-spacing: 1px;
    position: relative;
    opacity: 0.85;
    &::before {
        position: absolute;
        content: "";
        top: 50%;
        transform: translate(50%, -50%);
        border-radius: 20%;
        left: 0.75rem;
        height: 0.75rem;
        width: 0.75rem;
        bottom: 0;
        background-color: transparent;
        transition: background-color 500ms;
    }
    &:hover {
        opacity: 1.0;
        &::before {
            background-color: var(--color-grey);
        }
    }
    &.active {
        &::before {
            background-color: var(--color-primary);
        }
    }
`