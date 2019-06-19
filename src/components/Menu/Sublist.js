import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Rotator } from '../Transformers'
import { ExpandDownIcon } from '../Icons'
import { MenuItem } from './MenuItem'

const Expander = styled.div`
    width: 100%;
    transition: max-height 500ms;
    max-height: ${ props => props.expanded ? `${ props.children.length * 50 }px` : 0 };
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-left: 0.75rem;
    & > a {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }
`

Expander.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Sublist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

Sublist.propTypes = {
    children: PropTypes.node.isRequired,
}

const SubmenuToggler = styled(Rotator)`
    opacity: 0.75;
    transition: opacity 250ms;
    &:hover {
        opacity: 1.0;
    }
`

export const ExpandingSublist = ({ title, to, activeClassName, children }) => {
    const [open, setOpen] = useState(false)

    const handleExpand = event => {
        event.preventDefault()
        setOpen(!open)
    }

    return (
        <Sublist>
            <MenuItem to={ to } activeClassName={ activeClassName } style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                { title }
                <SubmenuToggler rotated={ open } onClick={ handleExpand }>
                    <ExpandDownIcon />
                </SubmenuToggler>
            </MenuItem>
            <Expander expanded={ open }>
                { children }
            </Expander> 
        </Sublist>
    )
}

ExpandingSublist.propTypes = {
    children: PropTypes.node.isRequired,
}

