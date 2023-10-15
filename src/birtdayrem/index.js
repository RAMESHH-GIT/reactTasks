import React, { useState } from 'react'
import data from './data'
import List from './List'
function Main() {
  const [people, setPeople] = useState(data)
  console.log("react",people)
  return (
    
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
       {console.log("react",people)}
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default Main

