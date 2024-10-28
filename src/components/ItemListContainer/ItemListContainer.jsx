
import React from 'react'
import Button from '../Button'

export const ItemListContainer = () => {
    const saludar = console.log('Gracias por su compra')

  return (
    <div>
        <Button text = 'Comprar' fn = {saludar} color = 'green' />
    </div>
  )
}

