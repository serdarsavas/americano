import React, { useState } from 'react'

export default function StartForm() {
  const [numPlayers, setNumPlayers] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumPlayers(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    console.log(numPlayers)
    setNumPlayers('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Välj antal spelare</h2>
      <input type='number' onChange={handleInput} value={numPlayers} />
      <button>Skicka</button>
    </form>
  )
}
