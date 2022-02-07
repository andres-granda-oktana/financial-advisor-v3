import React from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function RouteButton(props) {

    const router = useLocation();

    const {
        label,
        href = router.pathname,
        active = true,
        className = "",
    } = props

    let buttonClass = active ? "button primary" : "button primary disabled"
    let buttonHref = active ? href : router.pathname

    return (
        <div className={className}>
            <Link to={buttonHref} className={buttonClass}>{label}</Link>
        </div>
    )
}