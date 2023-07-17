import React from "react"

export default function Navbar()
{
    return (
    <nav>
        <img src="/images/tpt.png" className="nav--logo" />
        <h1 className="nav--title">TPT PLAYER CARDS</h1>
        <a href="https://tetr.io/" className="nav--icon--container"><img src="/images/tetrio.png" className="nav--icon"/></a>
    </nav>
    )
}