import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = styled.button`
    color: var(--color-primary);
    border-radius: ${ props => props.round ? '3px' : 0 };
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-primary);
    background-color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    transition: all 250ms;
    &:hover {
        background-color: var(--color-primary);
        color: #fff;
    }
`

Button.propTypes = {
    round: PropTypes.bool.isRequired,
    primary: PropTypes.bool.isRequired,
    secondary: PropTypes.bool.isRequired,
    border: PropTypes.bool.isRequired,
}

Button.defaultProps = {
    round: false,
    primary: false,
    secondary: false,
    border: true,
}

