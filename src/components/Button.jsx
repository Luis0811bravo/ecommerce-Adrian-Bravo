import React from 'react'

const Button = ({fn, text, color}) => {
  return (
    <button onClick = {fn}>
        {text}
    </button>
  )
}

export default Button