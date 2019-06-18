import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Layout, Header, Footer, Main, Content } from '../components/Layout'
import { Menu, MenuItem, ExpandingSublist } from '../components/Menu'
import { Divider } from '../components/Divider'
import { Brand } from '../components/Brand'
import { SearchBox } from '../components/SearchBox'
import { Rotator } from '../components/Transformers'
import { DashboardIcon, ExitIcon, ExpandRightIcon, LockIcon, SearchIcon } from '../components/Icons'
import { useWindowWidth } from '../hooks/useWindowWidth'
import { useAuth } from '../contexts'
import '../styles/base.scss'
import '../styles/globals.scss'

const WINDOW_WIDTH_THRESHOLD = 1080
const MENU_WIDTH = 320

export const HeaderButton = styled.button`
    color: var(--color-primary);
    & svg {
        transition: fill 250ms;
        fill: var(--color-primary);
        fill: ${ props => props.active ? 'var(--color-white)' : 'var(--color-primary)' };
    }
    outline: none;
    border: 0;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    transition: all 250ms;
    background-color: transparent;
    &:hover {
        filter: brightness(0.75);
    }
`

const MenuToggleButton = styled(HeaderButton)`
    padding: 0 1rem;
    opacity: 1.0;
    transform: translateX(0%)
    ${ props => props.visible ? `
        opacity: 1.0;
        pointer-events: default;
        transform: translateX(0%)
    ` : `
        opacity: 0.0;
        pointer-events: none;
        transform: translateX(-100%)
    `
    }
`

const Navigation = ({ items, compact, width }) => (
    <Menu compact={ compact } width={ width }>
        {
            items.map(({ text, path, submenu }) =>
                text && path ?
                    submenu ? (
                        <ExpandingSublist title={ text } key={ text } to={ path } activeClassName="active">
                            { submenu.map(({ text, path }) => <MenuItem key={ path } to={ path } activeClassName="active">{ text }</MenuItem>) }
                        </ExpandingSublist>
                    ) : (
                        <MenuItem key={ path } to={ path } activeClassName="active">{ text }</MenuItem>
                    )
                : <Divider key={ Math.random() } />
                )
        }
    </Menu>
)

export const Dashboard = ({ children }) => {
    const [windowWidth, setWindowWidth] = useWindowWidth()
    const isCompact = () => windowWidth < 800
    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggleMenu = () => setMenuOpen(!menuOpen)
    const [searchBoxVisibile, setSearchBoxVisibile] = useState(false)
    const [compact, setCompact] = useState(isCompact())
    const { loginHandler, logoutHandler, isLoggedIn } = useAuth()

    const handleToggleSearchBox = event => {
        setSearchBoxVisibile(!searchBoxVisibile)
        console.log(searchBoxVisibile)
    }

    const handleSearch = () => {
        setTimeout(() => setSearchBoxVisibile(false), 500)
        console.log('Initialize search...')
    }

    useEffect(() => {
        setCompact(isCompact())
    }, [windowWidth])

    useEffect(() => {
        setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }, [])
    
    const handleCloseDrawers = () => {
        if (menuOpen === true) handleToggleMenu()
        if (searchBoxVisibile === true) handleToggleSearchBox()
    }
    
    return (
        <StaticQuery query={
            graphql`
                query SiteDataQuery {
                    site {
                        siteMetadata {
                            title
                            menuItems {
                                text
                                path
                                submenu {
                                    text
                                    path
                                }
                            }
                        }
                    }
                }
            `}
        render={
            data => (
                <Layout style={{ overflow: 'hidden' }}>
                    <Header compact={ compact }>
                        <MenuToggleButton visible={ windowWidth < WINDOW_WIDTH_THRESHOLD } onClick={ handleToggleMenu }>
                            { compact ? null : 'Menu' } <Rotator rotated={ menuOpen }><ExpandRightIcon /></Rotator>
                        </MenuToggleButton>
                        <Brand compact={ compact } style={{ flex: 1 }}><Link to="/">{ data.site.siteMetadata.title }</Link></Brand>
                        <HeaderButton as="a" href="http://dashboard.renci.org/" target="_blank" rel="noopener noreferrer"><DashboardIcon /></HeaderButton>
                        <HeaderButton onClick={ handleToggleSearchBox } active={ searchBoxVisibile }><SearchIcon /></HeaderButton>
                        {
                            isLoggedIn() ? (
                                <HeaderButton onClick={ logoutHandler }>
                                    <ExitIcon /> &nbsp; { compact ? null : 'LOGOUT' }
                                </HeaderButton>
                            ) : (
                                <HeaderButton onClick={ loginHandler }>
                                    <LockIcon /> &nbsp; { compact ? null : 'LOGIN' }
                                </HeaderButton>
                            )
                        }
                    </Header>
                    <SearchBox open={ searchBoxVisibile } searchHandler={ handleSearch } />
                    <Main style={{ transform: menuOpen || windowWidth >= WINDOW_WIDTH_THRESHOLD ? `translateX(${ MENU_WIDTH }px)` : 'translateX(0)' }}>
                        <Navigation items={ data.site.siteMetadata.menuItems } compact={ compact } width={ MENU_WIDTH } />
                        <Content
                            compact={ compact }
                            pushedAside={ menuOpen }
                            dimmed={ menuOpen || searchBoxVisibile }
                            maxWidth={ WINDOW_WIDTH_THRESHOLD - MENU_WIDTH }
                            onClick={ handleCloseDrawers }
                        >
                            { children }
                        </Content>
                    </Main>
                    <Footer>
                        &copy; { new Date().getFullYear() }
                    </Footer>
                </Layout>
            )}
        />
    )
}

Dashboard.propTypes = {
    children: PropTypes.node.isRequired,
}
