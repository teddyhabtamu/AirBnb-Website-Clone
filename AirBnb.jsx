import NavBar from "./NavBar"
import Hero from "./Hero"
import "./style.css"
import Card from "./Card"
import Data from "./data.js"
function AirBnb(){

  const cards = Data.map((data) => {
    return <Card key={data.id} 
                 {...data}
    />
  })
  return(
    <div>
      <NavBar/>
      <div className="airBnb-container">
        <Hero/>
        <section className="card-list">
          {cards}
        </section>

      </div>
    </div>
  )
}

export default AirBnb