import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './components/Card'
import './index.css'
import { ItemType } from './types/itemType'

const item: ItemType = {
  title: 'Equilibrium',
  id: 3429,
  description: 'Our Equilibrium collection promotes balance and calm.',
  prize: 0.041,
  days: 3,
  image: 'image-avatar.png'
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Card item={item} />
  </React.StrictMode>,
)
