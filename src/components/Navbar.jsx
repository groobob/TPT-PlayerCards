import React from "react"

export default function Navbar()
{
    return (
    <nav>
        <h1 className="nav--title">TPT PLAYER CARDS</h1>
        <h1 className="nav--discord">DISCORD</h1>
        <a href="https://tetr.io/" className="nav--icon--container"><img src="/images/tetrio.png" className="nav--icon"/></a>
    </nav>
    )
}