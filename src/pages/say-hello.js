import * as React from 'react'
import Greeting from '../components/greeting'

// Renderen van de <Greeting> component
const SayHello = () => {
    return (
      <div>
        <Greeting name="Megan" />
        <Greeting name="Obinna" />
        <Greeting name="Generosa" />
      </div>
    )
  }

export default SayHello;