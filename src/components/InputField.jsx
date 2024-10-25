import React from 'react'

const InputField = ({text, handleInput, handleSumbmit}) => {
  return (
    <label>
        <input value={text} onChange={(e) => handleInput(e.target.value)} />
        <button onClick={handleSumbmit}>Add Todo</button>
      </label>
  )
}

export default InputField