import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import data from "./data"
import Cards from "./components/Cards"


export default function App() {
  const cards = (data.map(item => {
    return(
      <Cards 
      key={item.id}
      {...item}
      />
    )
  }))

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards">
        {cards}
      </section>
    </div>
  )
}