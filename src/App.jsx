import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import data from "./data"


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