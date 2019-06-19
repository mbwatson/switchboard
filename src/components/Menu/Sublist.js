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
    padding-left: 0.5rem;
`

Expander.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Sublist = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    // & * { border: 1px solid #f99; }
`

Sublist.propTypes = {
    children: PropTypes.node.isRequired,
}

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
                <Rotator rotated={ open } onClick={ handleExpand }>
                    <ExpandDownIcon />
                </Rotator>
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

