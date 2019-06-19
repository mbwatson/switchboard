import styled from 'styled-components'

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--color-grey);
    background-color: var(--color-white);
    transition: padding-top 250ms;
    padding-top: ${ props => props.compact ? '1rem' : '2rem' };
    width: ${ props => props.width }px;
    position: absolute;
    top: 0;
    left: -${ props => props.width }px;
    height: 100%;
`
