import styled from 'styled-components'

export const Header = styled.header`
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 0;
    margin: 0;
    min-height: 5rem;
    min-height: ${ props => props.compact ? '3rem' : '5rem' };
    padding-right: 1rem;
    padding-right: ${ props => props.compact ? 0 : '1rem' };
    transition: min-height 250ms, padding-right 250ms;
    justify-content: space-between;
    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);
    z-index: 2;
`

export const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: row;
    background-color: #f0f0f0;
    position: relative;
    transition: transform 500ms;
`

export const Content = styled.div`
    padding: ${ props => props.compact ? '2rem' : '3rem' };
    line-height: ${ props => props.compact ? 2 : 1.75 };
    transition: padding 250ms;
    flex: 1;
    filter: ${ props => props.dimmed ? 'opacity(0.25)' : '' };
    transition: filter 250ms, padding 250ms;
    max-width: ${ props => props.maxWidth }px;
    a {
        color: var(--color-primary);
        border-bottom: 1px solid var(--color-primary);
        transition: filter 250ms;
        &:hover {
            filter: brightness(50%);
        }
    }
`

export const Footer = styled.footer`
    background-color: var(--color-black);
    height: 5rem;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--color-white);
    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);
    z-index: 1;
`

export const Layout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`